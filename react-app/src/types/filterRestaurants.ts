import { Restaurant } from './Restaurant';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type FilterConditions = {
  restaurantName: string;
  menuCategory: string;
};

export default function filterRestaurants(
  restaurants: Restaurant[],
  { restaurantName, menuCategory }: FilterConditions,
): Restaurant[] {
  const match = (restaurant: Restaurant) => restaurant.category === menuCategory;

  const filteredRestaurants = menuCategory === '전체' ? restaurants : restaurants.filter(match);

  const query = normalize(restaurantName);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurant) => normalize(restaurant.name).includes(query);

  return filteredRestaurants.filter(contains);
}
