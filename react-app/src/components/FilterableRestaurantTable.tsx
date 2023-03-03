import { useState } from 'react';
import Restaurant from '../types/Restaurant';
import filterRestaurants from '../utils/filterRestaurants';
import selectCategory from '../utils/selectCategory';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';

type FilterableRestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function FilterableRestaurantTable({
  restaurants,
}: FilterableRestaurantTableProps) {
  const categories = selectCategory(restaurants);
  const [filterText, setFilterText] = useState('');
  const [filterButton, setFilterButton] = useState('전체');

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterButton });
  return (
    <div>
      <SearchBar
        categories={categories}
        setFilterText={setFilterText}
        setFilterButton={setFilterButton}
      />
      <RestaurantTable
        restaurants={filteredRestaurants}
      />
    </div>
  );
}
