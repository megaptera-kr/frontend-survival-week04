import { useLocalStorage } from 'usehooks-ts';
import { useEffect, useState } from 'react';

import Cart from './Cart';
import RestaurantTable from './RestaurantTable';
import ReceiptBox from './ReceiptBox';
import filterRestaurant from '../utils/filterRestaurant';
import SearchBar from './SearchBar';

import {
  Category, Menu, Receipt, Restaurants,
} from '../types';

function FilterableTable() {
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);
  const [receipt, setReceipt] = useLocalStorage<Receipt | null>('receipt', null);
  const [restaurants, setRestaurants] = useState<Restaurants[]>([]);

  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<Category>('전체');

  const filterData = filterRestaurant(restaurants, { category, query });

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      setRestaurants(data.restaurants);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart cart={cart} setCart={setCart} setReceipt={setReceipt} />
      <SearchBar query={query} setQuery={setQuery} setCategory={setCategory} />
      <RestaurantTable setCart={setCart} restaurants={filterData} />
      <ReceiptBox receipt={receipt} setReceipt={setReceipt} />
    </div>

  );
}

export default FilterableTable;
