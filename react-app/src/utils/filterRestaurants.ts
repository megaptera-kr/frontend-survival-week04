import type { Restaurant, RestaurantFilterConditions } from '../types/restaurants';

export default function filterRestaurants(
  restaurants: Restaurant[],
  { query, foodType }: RestaurantFilterConditions,
) {
  const filterdByFoodType = restaurants.filter((restaurant) => {
    if (foodType === '전체') return restaurant;
    return restaurant.category === foodType;
  });

  const filterdByQuery = filterdByFoodType.filter(
    (restaurant) => restaurant.name.includes(query.trim()),
  );

  return filterdByQuery;
}
