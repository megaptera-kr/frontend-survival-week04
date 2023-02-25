import Restaurant from '../types/Restuarant';

export default function filterRestaurants(
  restaurants:Restaurant[],
  filterCategory:string,
  filterText:string,
) {
  const match = (restaurant:Restaurant) => (restaurant.category === filterCategory);

  const filteredCategory = filterCategory === '전체'
    ? restaurants
    : restaurants?.filter(match);

  const filteredRestaurants = filterText
    ? filteredCategory.filter((restaurant) => restaurant.name.includes(filterText.trim()))
    : filteredCategory;

  return filteredRestaurants;
}
