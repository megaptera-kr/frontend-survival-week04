import { useState } from 'react';
import { RestaurantType } from '../types/restaurants';
import getFilterValues from '../utils/getFilterValues';
import getSearchRestaurant from '../utils/getSearchRestaurant';

export default function useRestaurants(restaurants: RestaurantType[]) {
  //   const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const categories = getFilterValues<RestaurantType, string>(
    'category',
    restaurants,
  );
  const handleSearchChange = (value: string) => {
    setSearch(value.trim());
  };
  const restaurantList = getSearchRestaurant(
    filter === 'all'
      ? restaurants
      : restaurants.filter(({ category }) => category === filter),
    search,
  );

  return {
    restaurantList,
    search,
    setSearch: handleSearchChange,
    filter,
    setFilter,
    categories,
  };
}
