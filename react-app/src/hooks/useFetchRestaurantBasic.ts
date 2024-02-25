import { useState, useEffect } from 'react';

import Restaurant from '../Types/Restaurant';

export default function useFetchRestaurant() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const FetchRestaurant = async () => {
      const response = await fetch('http://localhost:3000/restaurants');
      const data = await response.json();
      setRestaurants(data.restaurants);
    };

    FetchRestaurant();
  }, []);

  return restaurants;
}
