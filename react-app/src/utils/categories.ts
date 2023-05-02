import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function categories():string[] {
  const restaurants = useFetchRestaurants();

  if (!restaurants) {
    return ['전체'];
  }

  return restaurants.reduce(
    (acc, restaurant) => (acc.includes(restaurant.category)
      ? acc : [...acc, restaurant.category]),
    ['전체'],
  );
}
