import { useFetch } from 'usehooks-ts';
import { Restaurant } from '../types/Restaurant';

const URL = 'http://localhost:3000/restaurants';

interface Restaurants {
  [restaurants: string]: Restaurant[];
}

export default function useFetchRestaurants() {
  const { data } = useFetch<Restaurants>(URL);

  if (!data) {
    return [];
  }

  return data.restaurants;
}
