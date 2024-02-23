import { useEffect, useState } from 'react';

import MenuSearchBar from './MenuSearchBar';
import MenuTable from './MenuTable';
import Cart from './Cart';
import Receipt from './Receipt';

import Category from '../types/CategoryType';
import Restaurant from '../types/RestaurantType';
import RestaurantMenu from '../types/RestaurantMenuType';

function Kiosk() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [searchRestaurantName, setSearchRestaurantName] = useState<string>('');
  const [searchCategoryName, setSearchCategoryName] = useState<string>('');
  const [cartDataLocalStorage, setCartDataLocalStorage] = useState<
    RestaurantMenu[]
  >([]);
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

        const data: Category[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories data:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
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

        const data: Restaurant[] = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants data:', error);
      }
    };

    fetchProducts();
  }, [searchRestaurantName, searchCategoryName]);

  useEffect(() => {
    const loadCartFromLocalStorage = () => {
      try {
        const cartData = localStorage.getItem('cart');
        const data: RestaurantMenu[] = cartData ? JSON.parse(cartData) : [];
        setCartDataLocalStorage(data);
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
        <Cart
          cartDataLocalStorage={cartDataLocalStorage}
          handleUpdateCart={handleUpdateCart}
        />
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
