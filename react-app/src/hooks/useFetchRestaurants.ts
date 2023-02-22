import { useEffect, useState } from 'react';

import { Restaurant, RestaurantResponseDto } from '../types/restaurants';

export default function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await fetch('http://localhost:3000/restaurants');
      const response: RestaurantResponseDto = await data.json();

      setRestaurants(response.restaurants);
    };
    fetchRestaurants();
  }, []);

  return { restaurants };
}
