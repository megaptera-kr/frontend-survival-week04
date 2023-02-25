import Restaurant from '../types/Restaurant';

type FilterCondition = {
    filterText: string;
    filterCategory: string;
}

function normalize(text: string) {
  return text.trim().toLowerCase();
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: FilterCondition,
): Restaurant[] {
  const filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === filterCategory);

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  return filteredRestaurants.filter((restaurant) => (
    normalize(restaurant.name).includes(query)
  ));
}
