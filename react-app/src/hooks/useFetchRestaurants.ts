import { useState } from 'react';

import { useEffectOnce } from 'usehooks-ts';

import Restaurant from '../types/Restaurants';

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffectOnce(() => {
    const fetchRestaurants = async () => {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url);
      const data = await response.json() as {restaurants: Restaurant[]};

      setRestaurants(data.restaurants);
    };

    fetchRestaurants();
  });

  return restaurants;
};

export default useFetchRestaurants;
