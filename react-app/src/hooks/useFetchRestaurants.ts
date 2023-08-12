import { useFetch } from 'usehooks-ts';

import type { Restaurant } from '../types/restaurants';

export default function useFetchRestaurants() {
  const url = 'http://localhost:3000/restaurants';
  const { data } = useFetch<{restaurants: Restaurant[]}>(url);

  if (!data) return [];

  const { restaurants } = data;
  return restaurants;
}
