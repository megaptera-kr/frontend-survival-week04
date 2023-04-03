import { Restaurant, KioskFilter } from '../types/kiosk';

const filterRestaurantName = (restaurants: Restaurant[], name: string): Restaurant[] => {
  if (!name) return restaurants;
  const regexp = new RegExp(`.*${name.trim()}.*`, 'g');

  return restaurants.filter((restaurant) => regexp.test(restaurant.name));
};

const filterRestaurantCategory = (
  restaurants: Restaurant[],
  category: string,
): Restaurant[] => (category === '전체'
  ? restaurants
  : restaurants.filter((restaurant) => restaurant.category === category));

export const filterRestaurants = (
  restaurants: Restaurant[],
  { searchText, category }: KioskFilter,
): Restaurant[] => filterRestaurantCategory(
  filterRestaurantName(restaurants, searchText),
  category,
);

export default filterRestaurants;
