import { useEffect, useState } from 'react';

import MenuSearchBar from './MenuSearchBar';
import MenuTable from './MenuTable';
import Cart from './Cart';
import Receipt from './Receipt';

import CategoryType from '../types/CategoryType';
import RestaurantType from '../types/RestaurantType';
import CartItemType from '../types/CartItemType';

function Kiosk() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const [searchRestaurantName, setSearchRestaurantName] = useState<string>('');
  const [searchCategoryName, setSearchCategoryName] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [updateCart, setUpdateCart] = useState<boolean>(false);

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

  useEffect(() => {
    const loadCartFromLocalStorage = () => {
      try {
        const data = localStorage.getItem('cart');
        const items: CartItemType[] = data ? JSON.parse(data) : [];

        setCartItems(items);
      } catch (error) {
        console.error('Error loading cart data from localStorage:', error);
      }
    };

    loadCartFromLocalStorage();
  }, [updateCart]);

  const handleSearchRestaurantName = (value: string) => {
    setSearchRestaurantName(value.trim());
  };

  const handleSearchCategoryName = (value: string) => {
    setSearchCategoryName(value);
  };

  const handleUpdateCart = () => {
    setUpdateCart((prev) => !prev);
  };

  return (
    <div className='kiosk-container'>
      <h1>푸드코트 키오스크</h1>
      <div>
        <Cart cartItems={cartItems} handleUpdateCart={handleUpdateCart} />
        <MenuSearchBar
          categories={categories}
          handleSearchRestaurantName={handleSearchRestaurantName}
          handleSearchCategoryName={handleSearchCategoryName}
        />
        <MenuTable
          restaurants={restaurants}
          handleUpdateCart={handleUpdateCart}
        />
        <Receipt />
      </div>
    </div>
  );
}

export default Kiosk;
