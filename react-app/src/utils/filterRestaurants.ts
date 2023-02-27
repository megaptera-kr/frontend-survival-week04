import Restaurant from '../types/Restaurant';

type filterRestaurantsProps = {
  filterText: string;
  filterButton: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterButton }: filterRestaurantsProps,
): Restaurant[] {
  const query = filterText.trim();
  const filteredRestaurants = (filterButton === '전체')
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === filterButton);

  if (!query) {
    return filteredRestaurants;
  }

  return filteredRestaurants.filter((restaurant: Restaurant) => restaurant.name.includes(query));
}
