import { useFetch } from 'usehooks-ts';
import { TRestaurantsResponse } from '../types/restaurant';

const url = 'http://localhost:3000/restaurants';

type TRestaurants = {
  [restaurants: string]: TRestaurantsResponse[]
}

const useFetchRestaurants = () => {
  const { data } = useFetch<TRestaurants>(url);

  if (!data) return [];

  return data.restaurants;
};

export default useFetchRestaurants;
