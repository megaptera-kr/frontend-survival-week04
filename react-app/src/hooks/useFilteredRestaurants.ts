import { useState, useMemo, useEffect } from 'react';
import { RestaurantFilter, Restaurant } from '../types';

const useFilteredRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [restaurantFilter, setRestaurantFilter] = useState<RestaurantFilter>({
    name: '',
    category: '전체',
  });

  useEffect(() => {
    fetch('http://localhost:3000/restaurants')
      .then((response) => response.json())
      .then((data: Restaurant[]) => {
        setRestaurants(data);
      });
  }, []);

  const filteredRestaurants = useMemo(() => restaurants.filter((restaurant) => {
    const nameFilter = restaurantFilter.name.trim() === '' || restaurant.name.includes(restaurantFilter.name);
    const categoryFilter = restaurantFilter.category === '전체' || restaurant.category === restaurantFilter.category;
    return nameFilter && categoryFilter;
  }), [restaurantFilter, restaurants]);

  return { restaurantFilter, setRestaurantFilter, filteredRestaurants };
};

export default useFilteredRestaurants;
