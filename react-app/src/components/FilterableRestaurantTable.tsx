import { useState } from 'react';
import Restaurant from '../types/Restaurant';
import filterRestaurants from '../utils/filterRestaurants';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';
import selectCategories from '../utils/selectCategories';

type FilterableRestaurantTableProps = {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantTable({
  restaurants,
}:FilterableRestaurantTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText, filterCategory,
  });

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
