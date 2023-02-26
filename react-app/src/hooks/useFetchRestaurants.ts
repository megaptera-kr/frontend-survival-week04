import { useFetch } from 'usehooks-ts';

import restaurantType from '../types/restaurantType';

const url = 'http://localhost:3000/restaurants';

interface Restaurants {
  [restaurants: string]: restaurantType[];
}

export default function useFetchRestaurants() {
  const { data } = useFetch<Restaurants>(url);

  if (!data) {
    return [];
  }

  return data.restaurants;
}
