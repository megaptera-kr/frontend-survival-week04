import { useEffect, useState } from 'react';

export default function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    console.log('fetch restaurants');

    // useEffect로 한 번만 fetch
    const fetchRestaurants = async () => {
      const url = 'http://localhost:3000/restaurants';

      const response = await fetch(url);

      const data = await response.json();

      // const { restaurants } = data;

      setRestaurants(data.restaurants);

      console.log(data);

      console.log(data.restaurants);

      console.log(response);
    };

    fetchRestaurants();
  }, []);

  return restaurants;
}
