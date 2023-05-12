import { useFetch } from 'usehooks-ts';
import Restaurants from '../type/Restaurants';

const url = 'http://localhost:3000/restaurants';

type FetchRestaurants = {
  [restaurants : string] :Restaurants[]
}

export default function useFetchRestaurants() {
  const { data } = useFetch<FetchRestaurants>(url);
  if (!data) {
    return [];
  }
  return data.restaurants;
}
