import { useState, useEffect } from 'react';

import axios from 'axios';

import { Restaurant } from '../types/Restaurant';

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3000/restaurants';

      try {
        const response = await axios.get(url);
        setRestaurants(response.data.restaurants);
      } catch (error) {
        throw new Error('에러발생');
      }
    };

    fetchData();
  }, []);

  return [restaurants];
};

export default useFetchRestaurants;
