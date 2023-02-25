import { useEffect, useState } from 'react';

export default function useFetchProducts() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url);
      const data = await response.json();
      setRestaurants(data.restaurants);
    };

    fetchProducts();
  }, []);

  return restaurants;
}
