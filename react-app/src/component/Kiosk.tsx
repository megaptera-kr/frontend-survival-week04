import { useEffect, useState } from 'react';

import MenuSearchBar from './MenuSearchBar';
import MenuTable from './MenuTable';
import OrderBox from './OrderBox';
import Receipt from './Receipt';

import Category from '../types/CategoryType';
import Restaurant from '../types/RestaurantType';

function Kiosk() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');

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

      params.append('categoryName', categoryName);
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
  }, [categoryName]);

  const handleCategoryName = (value: string) => {
    setCategoryName(value);
  };

  return (
    <div className='kiosk-container'>
      <h1>푸드코트 키오스크</h1>
      <div>
        <OrderBox />
        <MenuSearchBar
          categories={categories}
          handleCategoryName={handleCategoryName}
        />
        <MenuTable restaurants={restaurants} />
        <Receipt />
      </div>
    </div>
  );
}

export default Kiosk;
