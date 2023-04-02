import { useState } from 'react';
import Restaurant from '../types/Restaurant';
import restaurantFillter from '../api/RestaurantFillter';
import categoryFilter from '../api/CategoryFilter';
import RestaurantTable from './RestaurantContents';
import SearchBar from './SearchArea';

type FilterableRestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function FilterSelector({
  restaurants,
}: FilterableRestaurantTableProps) {
  const categories = categoryFilter(restaurants);
  const [filterText, setFilterText] = useState('');
  const [filterButton, setFilterButton] = useState('전체');

  const filteredRestaurants = restaurantFillter(restaurants, { filterText, filterButton });
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
