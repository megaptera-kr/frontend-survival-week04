import { useFetch } from 'usehooks-ts';
import { Restaurants } from '../types/types';

const url = 'http://localhost:3000/restaurants';

type fetchDataType = {
   [restaurants: string]: Restaurants[];
}
export default function useGetRestaurants() {
  const { data } = useFetch<fetchDataType>(url);

  if (!data) {
    return [];
  }

  return data.restaurants;
}
