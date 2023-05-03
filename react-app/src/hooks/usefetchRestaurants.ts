import { useFetch } from 'usehooks-ts';

import Restaurant from '../types/Restaurant';

interface fetchRestaurantsProps {
    restaurants : Restaurant[];
}

const usefetchRestaurants = () => {
  const url = 'http://localhost:3000/restaurants';
  const { data } = useFetch<fetchRestaurantsProps>(url);

  if (!data) return [];
  return data.restaurants;
};

export default usefetchRestaurants;
