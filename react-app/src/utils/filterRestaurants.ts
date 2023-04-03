import Restaurant from '../types/Restaurant';

type FilterConditions = {
  filterText: string;
  filterCategory: string;
};

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: FilterConditions
): Restaurant[] {
  const filteredRestaurants =
    filterCategory === '전체'
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === filterCategory
        );

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  return filteredRestaurants.filter((restaurant) =>
    normalize(restaurant.name).includes(query)
  );
}
