import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

export default function RestaurantTable() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const fetchRestaurants = async () => {
    const url = 'http://localhost:3000/restaurants';
    const response = await fetch(url);
    const data = await response.json();
    setRestaurants(data.restaurants);
  };

  useEffectOnce(() => {
    fetchRestaurants();
  });

  return (
    <table>
      <thead>
        <tr>
          <th>식당</th>
          <th>분류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        { restaurants.map((restaurant) => (
          <RestaurantRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}
