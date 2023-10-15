import { useState } from 'react';
import Restaurant from '../types/Restaurant';
import FilterField from './FilterField';
import RestaurantTable from './RestaurantTable';
import filterRestaurants from '../utils/filterRestaurants';

type FilterableRestaurantTableProps = {
  restaurants: Restaurant[]
}

export default function FilterableRestaurantTable({
  restaurants,
}: FilterableRestaurantTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

  return (
    <div>
      <FilterField
        restaurants={restaurants}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}
