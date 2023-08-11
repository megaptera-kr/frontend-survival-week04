import type { Restaurant } from '../types/restaurants';

export default function filterRestaurants(restaurants: Restaurant[], foodType: string) {
  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (foodType === '전체') return restaurant;
    return restaurant.category === foodType;
  });

  return filteredRestaurants;
}
