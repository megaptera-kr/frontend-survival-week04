import { useState } from 'react';

import MenuFilter from './MenuFilter';
import RestaurantsTable from './RestaurantsTable';

import filterRestaurants from '../utils/filterRestaurants';

import Restaurant from '../types/Restaurant';

type FilterRestaurantsTableProps = {
    restaurants: Restaurant[];
}

export default function FilterRestaurantsTable({ restaurants }:FilterRestaurantsTableProps) {
  const [searchText, setSearchText] = useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurants(restaurants, { searchText, selectCategory });

  return (
    <div>
      <MenuFilter
        restaurants={restaurants}
        searchText={searchText}
        setSearchText={setSearchText}
        setSelectCategory={setSelectCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </div>
  );
}
