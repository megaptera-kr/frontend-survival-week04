import { useState } from 'react';
import { useInterval, useLocalStorage } from 'usehooks-ts';

import MenuSearchBar from './MenuSearchBar';
import MenuTable from './MenuTable';
import Cart from './Cart';
import Receipt from './Receipt';

import useFetchCategories from '../hooks/useFetchCategories';
import useSearchRestaurants from '../hooks/useSearchRestaurants';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import useHandleCartItems from '../hooks/useHandleCartItems';

import CategoryType from '../types/CategoryType';
import RestaurantType from '../types/RestaurantType';
import CartItemType from '../types/CartItemType';
import OrderType from '../types/OrderType';
import ReceiptType from '../types/ReceiptType';

function Kiosk() {
  const {
    searchRestaurantName,
    searchCategoryName,
    handleSearchRestaurantName,
    handleSearchCategoryName,
  } = useSearchRestaurants();
  const categories: CategoryType[] = useFetchCategories();
  const restaurants: RestaurantType[] = useFetchRestaurants(
    searchRestaurantName,
    searchCategoryName,
  );
  const {
    cartItems,
    handleAddCartItem,
    handleRemoveCartItem,
    handleRemoveAllCartItem,
  } = useHandleCartItems();

  const [receipt, setReceipt] = useLocalStorage<
    ReceiptType | Record<string, never>
  >('receipt', {});
  const [isShowReceipt, setIsShowReceipt] = useState<boolean>(false);

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
        handleRemoveAllCartItem();
      } catch (error) {
        setReceipt({});
        setIsShowReceipt(false);
      }
    };

    postOrders();
  };

  useInterval(
    () => {
      setIsShowReceipt(false);
    },
    isShowReceipt ? 5000 : null,
  );

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
        <Receipt receipt={receipt} isShowReceipt={isShowReceipt} />
      </div>
    </div>
  );
}

export default Kiosk;
