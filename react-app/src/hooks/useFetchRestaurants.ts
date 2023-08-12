import { useFetch } from 'usehooks-ts';

import { IRestaurant } from '../types/restaurants';

const url = 'http://localhost:3000/restaurants';

export default function useFetchRestaurants() {
  return useFetch<{restaurants: IRestaurant[]}>(url);
}
