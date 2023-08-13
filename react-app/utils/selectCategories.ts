import { IRestaurant } from '../src/types/restaurants';

import DEFAULT_SELECTED_CATEGORY from '../src/constants/categories';

export default function selectCategories(restaurants: IRestaurant[]) {
  const categories = restaurants.map((restaurant) => restaurant.category);
  return [DEFAULT_SELECTED_CATEGORY, ...categories];
}
