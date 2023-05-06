import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';
import Restaurant from '../types/Restaurant';

export default function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const fetchRestaurants = async () => {
    const url = 'http://localhost:3000/restaurants';
    const response = await fetch(url);
    const data = await response.json();
    setRestaurants(data.restaurants);
  };

  useEffectOnce(() => {
    // (()=>{})(); 형태로 실행하는 방법도 있다.
    fetchRestaurants();
  });

  return restaurants;
}
