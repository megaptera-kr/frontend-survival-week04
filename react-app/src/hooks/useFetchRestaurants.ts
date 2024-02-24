import { useEffect, useState } from 'react';

import RestaurantType from '../types/RestaurantType';

function useFetchRestaurants(
  searchRestaurantName: string,
  searchCategoryName: string,
): RestaurantType[] {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const url = new URL('http://localhost:3000/restaurants');
      const params = new URLSearchParams();

      params.append('restaurantName', searchRestaurantName);
      params.append('categoryName', searchCategoryName);

      url.search = params.toString();

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch restaurants data. Status: ${response.status}`,
          );
        }

        const data: RestaurantType[] = await response.json();
        setRestaurants(data);
      } catch (error) {
        setRestaurants([]);
      }
    };

    fetchRestaurants();
  }, [searchRestaurantName, searchCategoryName]);

  return restaurants;
}

export default useFetchRestaurants;
