import { useState, useEffect } from 'react';

import { RestaurantItem } from '../types/restaurantItemType';

export default function useInit() {
  const [loading, setLoading] = useState(true);

  const [restaurntsData, setRestaurntsData] = useState<RestaurantItem[]>([]);

  useEffect(() => {
    let ignore = false;

    async function fetchRestaurants() {
      const response = await fetch('http://localhost:3000/restaurants');
      const { restaurants } = await response.json();

      setLoading(false);

      if (!ignore) {
        setRestaurntsData(restaurants);
      }
    }

    fetchRestaurants();

    return () => {
      ignore = true;
    };
  }, []);
  return {
    loading,
    restaurntsData,
  };
}
