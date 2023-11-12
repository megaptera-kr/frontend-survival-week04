import { useFetch } from 'usehooks-ts';

import { RestaurantItem } from '../types/restaurantItemType';

import { getRataurantsAPI } from '../constants/apis';

interface Restaurants {
  restaurants: RestaurantItem[];
}

export default function useInit() {
  const { data } = useFetch<Restaurants>(getRataurantsAPI);

  return {
    restaurntsData: data?.restaurants ? data.restaurants : [],
  };
}
