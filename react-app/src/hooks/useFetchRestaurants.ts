import { useFetch } from 'usehooks-ts';
import Restaurant from '../types/Restaurant';

type FetchRestaurantsType = {
  [restaurants: string]: Restaurant[]
}

export default function useFetchRestaurants() {
  const url = 'http://localhost:3000/restaurants';
  const { data } = useFetch<FetchRestaurantsType>(url);

  if (!data) {
    return [];
  }
  return data.restaurants;
}
