import { useState } from 'react';
import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';
import filterRestaurants from '../utils/filterRestaurants';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function FilterableRestaurant() {
  const restaurants = useFetchRestaurants();
  const [filterText, setFilterText] = useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, selectCategory });
  return (
    <div className="w-1/2 flex flex-col justify-center items-center mr-4">
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        setSelectCategory={setSelectCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </div>
  );
}
