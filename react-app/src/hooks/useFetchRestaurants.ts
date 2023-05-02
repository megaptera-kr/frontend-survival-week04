import { useFetch } from 'usehooks-ts';
import { Data } from '../types';

const url = 'http://localhost:3000/restaurants';

export default function useFetchRestaurants() {
  const { data } = useFetch<Data>(url);
  return data?.restaurants;
}
