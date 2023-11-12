import { useFetch } from 'usehooks-ts';

import { RestaurantItem } from '../types/restaurantItemType';

const url = 'http://localhost:3000/restaurants';

interface Restaurants {
  restaurants: RestaurantItem[];
}

export default function useInit() {
  const { data } = useFetch<Restaurants>(url);

  return {
    restaurntsData: data?.restaurants ? data.restaurants : [],
  };
}
