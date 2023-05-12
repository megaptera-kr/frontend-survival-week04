import { useState } from 'react';
import Restaurants from '../type/Restaurants';
import extractCategory from '../utils/extractCategory';
import restaurantFilter from '../utils/restaurantFilter';
import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';

type FilterableRestaurantsTableProps = {
  restaurants : Restaurants[]
}

export default function FilterableRestaurantsTable(
  { restaurants }:FilterableRestaurantsTableProps,
) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');
  const category = extractCategory(restaurants);
  const filteredRestaurants = restaurantFilter({ filterCategory, filterText, restaurants });
  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        category={category}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </>
  );
}
