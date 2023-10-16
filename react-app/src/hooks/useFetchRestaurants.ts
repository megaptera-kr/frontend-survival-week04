import { useEffect, useState } from 'react';

import { useFetch } from 'usehooks-ts';
import { Restaurnant } from '../types/restaurants';

type FetchRestaurantsType = {
  [restaurants: string]: Restaurnant[];
};

export default function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurnant[]>([]);

  const url = 'http://localhost:3000/restaurants';
  const { data } = useFetch<FetchRestaurantsType>(url);

  useEffect(() => {
    if (data) {
      setRestaurants(data.restaurants);
    }
  }, []);

  return restaurants;
}
