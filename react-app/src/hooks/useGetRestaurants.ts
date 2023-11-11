import { useState, useEffect } from 'react';

import { Restaurants } from '../types/types';

const url = 'http://localhost:3000/restaurants';

export default function useGetRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setRestaurants(data.restaurants);
    };
    fetchRestaurants();
  }, []);
  return restaurants;
}
