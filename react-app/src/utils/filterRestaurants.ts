import Restaurant from '../types/Restaurant';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type FilterConditions = {
  filterText : string;
  filterCategory: string;
}
export default function filterRestaurants(restaurants: Restaurant[], {
  filterText, filterCategory,
}: FilterConditions): Restaurant[] {
  const filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter((restaurant: Restaurant) => restaurant.category === filterCategory);

  const query = normalize(filterText);
  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(query)
  );

  return filteredRestaurants.filter(contains);
}
