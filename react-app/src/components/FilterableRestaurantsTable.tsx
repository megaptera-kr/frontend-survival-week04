import { useState } from 'react';
import SearchBar from './SearchBar';

import RestaurantTable from './RestaurantTable';

import Restaurant from '../types/Restaurants';

import selectCategories from '../utils/selectCategories';
import filterRestaurants from '../utils/filterRestaurants';

type FilterableRestaurantsTableProps = {
  restaurants: Restaurant[];
};

function FilterableRestaurantsTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const categories = selectCategories(restaurants);
  const filteredRestaurants = filterRestaurants(restaurants, { filterCategory, filterText });

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}

export default FilterableRestaurantsTable;
