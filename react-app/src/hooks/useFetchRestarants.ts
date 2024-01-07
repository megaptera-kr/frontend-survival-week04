import { useState, useEffect } from 'react';
import { Restaurant } from '../types/Restaurant';

const useFetchRestarants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url);
      const data = await response.json();
      setRestaurants(data.restaurants);
    };

    fetchData();
  }, []);

  return [restaurants];
};

export default useFetchRestarants;
