import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

import Restaurants from '../types/Restuarant';

export default function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([]);
  useEffectOnce(() => {
    const fetchRestaurants = async () => {
      const url = 'http://localhost:3005/restaurants';
      const response = await fetch(url);

      const data = await response.json();

      setRestaurants(data?.data?.data);
    };
    fetchRestaurants();
  });
  return restaurants;
}
