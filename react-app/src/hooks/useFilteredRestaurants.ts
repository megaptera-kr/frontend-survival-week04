import { useState, useMemo, useEffect } from 'react';
import { RestaurantFilter, Restaurant, RestaurantCategoryWithAll } from '../types';

const useFilteredRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [restaurantFilter, setRestaurantFilter] = useState<RestaurantFilter>({
    name: '',
    category: '전체',
  });

  useEffect(() => {
    const fetchRestaurants = async () => {
      const url = new URL('http://localhost:3000/restaurants');
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch restaurants data. Status: ${response.status}`,
          );
        }
        const data: Restaurant[] = await response.json();
        setRestaurants(data);
      } catch (error) {
        setRestaurants([]);
      }
    };

    fetchRestaurants();
  }, []);

  const filteredRestaurants = useMemo(() => restaurants.filter((restaurant) => {
    const nameFilter = restaurantFilter.name.trim() === '' || restaurant.name.includes(restaurantFilter.name);
    const categoryFilter = restaurantFilter.category === '전체' || restaurant.category === restaurantFilter.category;
    return nameFilter && categoryFilter;
  }), [restaurantFilter, restaurants]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantFilter({ ...restaurantFilter, name: e.target.value });
  };

  const handleCategoryClick = (category: RestaurantCategoryWithAll) => {
    setRestaurantFilter({ ...restaurantFilter, category });
  };

  return {
    restaurantFilter, setRestaurantFilter, filteredRestaurants, handleSearch, handleCategoryClick,
  };
};

export default useFilteredRestaurants;
