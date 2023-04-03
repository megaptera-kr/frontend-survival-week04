import { useState } from 'react';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import { Restaurant } from '../types/Restaurant';
import selectCategories from '../utils/selectCategory';
import filterRestaurants from '../types/filterRestaurants';

interface FilterableRestaurantTableProps {
  restaurants: Restaurant[];
}
export default function FilterableRestaurantTable({
  restaurants,
}: FilterableRestaurantTableProps) {
  const [menuCategory, setMenuCategory] = useState<string>('전체');
  const [restaurantName, setRestaurantName] = useState<string>('');

  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    restaurantName,
    menuCategory,
  });

  return (
    <>
      <SearchBar
        categories={categories}
        restaurantName={restaurantName}
        setRestaurantName={setRestaurantName}
        setMenuCategory={setMenuCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </>
  );
}
