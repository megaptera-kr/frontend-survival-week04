import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

export default function useFetchRestaurants() {
  const [restaurantsData, setRestaurantsData] = useState([]);

  const fetchRestaurants = async () => {
    const url = 'http://localhost:3000/restaurants';
    const response = await fetch(url);
    const { restaurants } = await response.json();

    setRestaurantsData(restaurants);
  };

  useEffectOnce(() => {
    try {
      fetchRestaurants();
    } catch (error) {
      console.log('통신 에러 발생');
    }
  });

  return restaurantsData;
}
