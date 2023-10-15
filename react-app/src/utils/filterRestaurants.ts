import Restaurant from '../types/Restaurant';

type FilterConditions = {
  filterText: string
  filterCategory: string
}

function normalize(text: string) {
  return text.trim();
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: FilterConditions,
) {
  const filteredRestaurant = restaurants.filter((restaurant: Restaurant) => {
    if (filterCategory === '전체') {
      return restaurant;
    }
    return restaurant.category === filterCategory;
  });

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurant;
  }

  const contains = (restaurant: Restaurant) => restaurant.name.includes(filterText);

  return filteredRestaurant.filter(contains);
}
