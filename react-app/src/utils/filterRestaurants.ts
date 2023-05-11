import { Restaurant } from '../types/restaurants';

type FilterConditions = {
  filterText: string;
  filterCategoryText: string;
}

function trimNormalize(filterText: string) {
  return filterText.trim().toLowerCase();
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategoryText }: FilterConditions,
): Restaurant[] {
  const query = trimNormalize(filterText);

  const filterQuery = restaurants;

  const filterCategoryTextRestaurants = (filterCategoryText === '전체')
    ? filterQuery
    : filterQuery.filter(
      (restaurant: Restaurant) => restaurant.category === filterCategoryText,
    );

  return filterCategoryTextRestaurants.filter(
    (restaurant: Restaurant) => trimNormalize(restaurant.name).includes(query),
  );
}
