import { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import type { Restaurant } from '../types/restaurants';

export default function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url);
      const data = (await response.json()) as {restaurants: Restaurant[]};
      setRestaurants(data.restaurants);
    };
    fetchRestaurants();
  }, []);

  return { restaurants };
}
