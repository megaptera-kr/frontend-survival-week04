import { useFetch } from 'usehooks-ts';

import { IRestaurant } from '../types/restaurants';

const url = 'http://localhost:3000/restaurants';

export default function useFetchRestaurants() {
  const { data } = useFetch<{ restaurants: IRestaurant[] }>(url);

  return data?.restaurants ?? [];
}
