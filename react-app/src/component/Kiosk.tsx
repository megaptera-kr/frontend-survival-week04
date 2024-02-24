import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import MenuSearchBar from './MenuSearchBar';
import MenuTable from './MenuTable';
import Cart from './Cart';
import Receipt from './Receipt';

import CategoryType from '../types/CategoryType';
import RestaurantType from '../types/RestaurantType';
import CartItemType from '../types/CartItemType';
import OrderType from '../types/OrderType';
import ReceiptType from '../types/ReceiptType';

function Kiosk() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const [searchRestaurantName, setSearchRestaurantName] = useState<string>('');
  const [searchCategoryName, setSearchCategoryName] = useState<string>('');
  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>('cart', []);
  const [receipt, setReceipt] = useLocalStorage<
    ReceiptType | Record<string, never>
  >('receipt', {});
  const [isShowReceipt, setIsShowReceipt] = useState<boolean>(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const url = 'http://localhost:3000/categories';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch categories data. Status: ${response.status}`,
          );
        }

        const data: CategoryType[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories data:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const url = new URL('http://localhost:3000/restaurants');
      const params = new URLSearchParams();

      params.append('restaurantName', searchRestaurantName);
      params.append('categoryName', searchCategoryName);

      url.search = params.toString();

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch restaurants data. Status: ${response.status}`,
          );
        }

        const data: RestaurantType[] = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants data:', error);
      }
    };

    fetchRestaurants();
  }, [searchRestaurantName, searchCategoryName]);

  const handleSearchRestaurantName = (value: string) => {
    setSearchRestaurantName(value.trim());
  };

  const handleSearchCategoryName = (value: string) => {
    setSearchCategoryName(value);
  };

  const handleAddCartItem = (cartItem: CartItemType) => {
    setCartItems((prev: CartItemType[]) => [...prev, cartItem]);
  };

  const handleRemoveCartItem = (cartItem: CartItemType) => {
    setCartItems((prev: CartItemType[]) =>
      prev.filter((item) => item !== cartItem),
    );
  };

  const handleOrder = (items: CartItemType[]) => {
    const order: OrderType = {
      menu: items.map((item: CartItemType) => ({
        id: item.id,
        name: item.name,
        price: item.price,
      })),
      totalPrice: items.reduce((acc, cur) => acc + cur.price, 0),
    };

    if (!order) {
      return;
    }

    const postOrders = async () => {
      const url = new URL('http://localhost:3000/orders');

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(order),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to post order data. Status: ${response.status}`,
          );
        }
        const data: ReceiptType = await response.json();
        setReceipt(data);
        setIsShowReceipt(true);
        setCartItems([]);
      } catch (error) {
        console.error('Error post order data:', error);
      }
    };

    postOrders();
  };

  const handleIsShowReceipt = () => setIsShowReceipt((prev) => !prev);
  const handleRemoveReceipt = () => setReceipt({});

  return (
    <div className='kiosk-container'>
      <h1>푸드코트 키오스크</h1>
      <div>
        <Cart
          cartItems={cartItems}
          handleRemoveCartItem={handleRemoveCartItem}
          handleOrder={handleOrder}
        />
        <MenuSearchBar
          categories={categories}
          handleSearchRestaurantName={handleSearchRestaurantName}
          handleSearchCategoryName={handleSearchCategoryName}
        />
        <MenuTable
          restaurants={restaurants}
          handleAddCartItem={handleAddCartItem}
        />
        <Receipt
          receipt={receipt}
          isShowReceipt={isShowReceipt}
          handleIsShowReceipt={handleIsShowReceipt}
          handleRemoveReceipt={handleRemoveReceipt}
        />
      </div>
    </div>
  );
}

export default Kiosk;
