import { Restaurant } from '../types/Restaurant';

type FilterRestaurantsProps = {
  query: string;
  restaurants: Restaurant[];
};

const filterRestaurants = ({ query, restaurants }: FilterRestaurantsProps) => {
  if (!query) {
    return restaurants;
  }

  const querTrim = query.trim();
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.name.includes(querTrim),
  );

  return filteredRestaurants;
};

export default filterRestaurants;
