import { useEffect, useState } from 'react';

import Restaurant from '../types/Restaurant';

export default function useFetchrestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url);
      const data = await response.json();
      setRestaurants(data.products);
    };

    fetchProducts();
  }, []);

  return { restaurants };
}
