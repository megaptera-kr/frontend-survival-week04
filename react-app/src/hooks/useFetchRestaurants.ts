import { useEffect, useState } from 'react';

import { Restaurnant } from '../types/restaurants';

export default function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurnant[]>([]);

  useEffect(() => {
    const fetchRestraurants = async () => {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url);
      const data = await response.json();

      setRestaurants(data.restaurants);
    };

    fetchRestraurants();
  }, []);

  return restaurants;
}
