import { useState } from 'react';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import filterRestaurants from './utils/filterRestaurants';
import Receipt from './components/Receipt';

export default function App() {
  const restaurants = useFetchRestaurants();

  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const filteredRestaurants = filterRestaurants({ restaurants, filterText, filterCategory });

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart />
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <FilterableRestaurantsTable
        restaurants={filteredRestaurants}
      />
      <Receipt />
    </div>
  );
}
