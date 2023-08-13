import { IRestaurant } from '../src/types/restaurants';

import DEFAULT_SELECTED_CATEGORY from '../src/constants/categories';

export default function selectCategories(restaurants: IRestaurant[]) {
  return restaurants
    .reduce<string[]>((acc, restaurant) => {
      const { category } = restaurant;
      if (!acc.includes(category)) {
        return [...acc, category];
      }

      return acc;
    }, [DEFAULT_SELECTED_CATEGORY]);
}
