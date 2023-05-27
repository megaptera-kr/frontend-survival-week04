import { useFetch } from 'usehooks-ts';

import RestaurantsType from '../types/RestaurantsType';

const url = 'http://localhost:3000/restaurants';

interface useFetchDataType {
  [restaurants: string]: RestaurantsType[]
}

export default function useFetchData() {
  const { data } = useFetch<useFetchDataType>(url);
  if (!data) {
    return [];
  }
  return data.restaurants;
}
