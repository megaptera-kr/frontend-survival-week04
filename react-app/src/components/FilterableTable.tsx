import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import filterData from '../utils/filterData';
import extractCategories from '../utils/extractCategories';

export default function FilterableTable() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const restaurants = useFetchRestaurants();

  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterData(restaurants, {
    filterText, filterCategory,
  });

  return (
    <>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable
        restaurants={filteredRestaurants}
      />
    </>
  );
}
