import { useLocalStorage } from 'usehooks-ts';
import { useState } from 'react';

import Cart from './Cart';
import RestaurantTable from './RestaurantTable';
import ReceiptBox from './ReceiptBox';
import filterRestaurant from '../utils/filterRestaurant';
import SearchBar from './SearchBar';

import {
  Category, Menu, Receipt,
} from '../types';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

function FilterableTable() {
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);
  const [receipt, setReceipt] = useLocalStorage<Receipt | null>('receipt', null);

  const restaurants = useFetchRestaurants();

  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<Category>('전체');

  const filterData = filterRestaurant(restaurants, { category, query });

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
