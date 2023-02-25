import { useState } from 'react';

import { useEffectOnce } from 'usehooks-ts';

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffectOnce(() => {
    const fetchRestaurants = async () => {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url);
      const data = await response.json();

      setRestaurants(data.restaurants);
    };

    fetchRestaurants();
  });

  return restaurants;
};

export default useFetchRestaurants;
