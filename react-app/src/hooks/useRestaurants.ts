import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';
import { Logger } from 'tslog';
import Restaurant from '../types/Restaurant';
import type FetchOptions from '../types/FetchOptions';

export default function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const options: FetchOptions = {
    method: 'GET',
    mode: 'cors',
  };
  const fetchRestaurants = async () => {
    try {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url, options);
      const data = await response.json();
      setRestaurants(data.restaurants);
    } catch (error) {
      const logger = new Logger({ name: 'myLogger' });
      logger.debug(error);
    }
  };

  useEffectOnce(() => {
    // (()=>{})(); 형태로 실행하는 방법도 있다.
    fetchRestaurants();
  });

  return restaurants;
}
