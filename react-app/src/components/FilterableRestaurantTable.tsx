import { useState } from 'react';

import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';

import { Restaurant } from '../types/restaurant';
import filterRestaurant from '../utils/filterRestaurant';
import selectCategories from '../utils/selectCategories';

type FilterableRestaurantTableProps = {
    restaurants: Restaurant[];
    handleSelectMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function FilterableRestaurantTable({
  restaurants,
  handleSelectMenu,
}:FilterableRestaurantTableProps) {
  const categories = ['전체', ...selectCategories(restaurants)];
  const [filterText, setFilterText] = useState<string>('');
  const [filterButton, setFilterButton] = useState<string>('전체');

  const filteredRestaurantsData = filterRestaurant(restaurants, filterText, filterButton);
  return (
    <>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterButton={setFilterButton}
      />
      <RestaurantTable
        restaurants={filteredRestaurantsData}
        handleSelectMenu={handleSelectMenu}
      />
    </>
  );
}
