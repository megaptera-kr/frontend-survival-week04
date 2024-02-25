import { useEffect, useState } from 'react';

import Restaurant from '../types/Restaurant';

export default function useFetchrestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const url = 'http://localhost:3000/restaurants';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRestaurants(data.restaurants));
  }, []);

  return { restaurants };
}
