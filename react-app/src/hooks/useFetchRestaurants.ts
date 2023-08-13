import { useFetch } from 'usehooks-ts';

import { Restaurant } from '../types';

const url = 'http://localhost:3000/restaurants';

export default function useFetchRestaurants() {
  const { data } = useFetch<{
    restaurants: Restaurant[];
    categories: string[];
  }>(url);

  return {
    restaurants: data?.restaurants || [],
    categories: data?.categories || [],
  };
}
