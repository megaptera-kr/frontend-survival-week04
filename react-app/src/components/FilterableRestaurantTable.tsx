import { useState } from 'react';
import SearchBar from './SearchBar';

import extractCategories from '../utils/extractCategories';

import Restaurant from '../types/Restaurant';
import RestaurantTable from './RestaurantTable';
import filterRestaurants from '../utils/filterRestaurants';

type FilterableRestaurantTableProps = {
  restaurants : Restaurant[]
}

export default function FilterableRestaurantTable({ restaurants }: FilterableRestaurantTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const categories = extractCategories(restaurants);
  const filteredResataurants = filterRestaurants(restaurants, {
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
      <RestaurantTable restaurants={filteredResataurants} />
    </div>
  );
}
