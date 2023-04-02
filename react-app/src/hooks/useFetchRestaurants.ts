import { useFetch } from 'usehooks-ts';

import type { Restaurant } from '../types/kiosk';

const URL = 'http://localhost:3000/restaurants';

export default function useFetchRestaurants() {
  const { data: restaurants = [] } = useFetch<Restaurant[]>(URL);

  return restaurants;
}
