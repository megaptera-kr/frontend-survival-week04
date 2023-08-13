import { useState } from 'react';

import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import selectCategories from '../../utils/selectCategories';
import filterRestaurants from '../../utils/filterRestaurants';

import DEFAULT_SELECTED_CATEGORY from '../constants/categories';

export default function FilterableRestaurantsTable() {
  const restaurants = useFetchRestaurants();
  const [searchText, setSearchText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>(DEFAULT_SELECTED_CATEGORY);

  const filteredRestaurants = filterRestaurants(restaurants, {
    searchText,
    selectedCategory,
  });

  const categories = selectCategories(restaurants);

  return (
    <>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </>
  );
}
