import { useState, useMemo, useEffect } from 'react';
import { CategoryFilter, Restaurant } from '../types';

const useFilteredRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filter, setFilter] = useState<CategoryFilter>({
    name: '',
    category: '전체',
  });

  useEffect(() => {
    const fetchRestaurants = fetch('http://localhost:3000/restaurants')
      .then((response) => response.json())
      .then((data: Restaurant[]) => {
        setRestaurants(data);
      });
  }, []);

  const filteredRestaurants = useMemo(() => restaurants.filter((restaurant) => {
    const nameFilter = filter.name.trim() === '' || restaurant.name.includes(filter.name);
    const categoryFilter = filter.category === '전체' || restaurant.category === filter.category;
    return nameFilter && categoryFilter;
  }), [filter, restaurants]);

  return { filter, setFilter, filteredRestaurants };
};

export default useFilteredRestaurants;
