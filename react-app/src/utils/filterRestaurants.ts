import { Restaurant } from '../types';

type FilterConditions = {
  filterText: string;
  selectCategory: string;
}
export default function filterRestaurants(
  restaurants:Restaurant[] | undefined,
  { filterText, selectCategory }:FilterConditions,
) {
  if (!restaurants) {
    return [];
  }
  const filteredRestaurants = selectCategory !== '전체' ? restaurants
    .filter((restaurant) => restaurant.category === selectCategory)
    : restaurants;

  const query = filterText.trim();

  if (!query) {
    return filteredRestaurants;
  }

  return (
    filteredRestaurants
      .filter((restaurant) => restaurant.name.includes(query))
  );
}
