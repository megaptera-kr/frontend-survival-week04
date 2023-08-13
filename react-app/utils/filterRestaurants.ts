import { IRestaurant } from '../src/types/restaurants';

import DEFAULT_SELECTED_CATEGORY from '../src/constants/categories';

type filterRestaurantsOption = {
  searchText?: string;
  selectedCategory?: string;
}

export default function filterRestaurants(
  restaurants: IRestaurant[],
  option: filterRestaurantsOption,
) {
  const { searchText, selectedCategory } = option;

  if (!searchText && !selectedCategory) return restaurants;

  return restaurants.filter(({ name }) => {
    if (!searchText) {
      return true;
    }

    return name.includes(searchText.trim());
  }).filter(({ category }) => {
    if (!selectedCategory || selectedCategory === DEFAULT_SELECTED_CATEGORY) {
      return true;
    }

    return category === selectedCategory;
  });
}
