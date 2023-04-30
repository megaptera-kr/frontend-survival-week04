import { Dispatch, SetStateAction, useState } from 'react';

import Restaurant from '../types/Restaurant';

import SearchFilter from './SearchFilter';
import RestaurantTable from './RestaurantTable';

import filterRestaurants from '../utils/filterRestaurants';

interface FilterableRestaurantTableProps{
    restaurants: Restaurant[];
    categories: string[];
}

function FilterableRestaurantTable({
  restaurants, categories,
}: FilterableRestaurantTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurants(
    restaurants,
    filterText,
    filterCategory,
  );

  return (
    <div>
      <SearchFilter
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}

export default FilterableRestaurantTable;
