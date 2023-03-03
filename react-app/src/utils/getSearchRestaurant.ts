import { RestaurantType } from '../types/restaurants';

export default function getSearchRestaurant(
  restaurantList: RestaurantType[],
  searchName: string,
) {
  if (!searchName) return restaurantList;
  const regexp = new RegExp(searchName, 'g');
  return restaurantList.filter(({ name }) => regexp.test(name.trim()));
}
