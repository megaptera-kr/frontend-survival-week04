import Restaurant from '../types/Restaurant';

const filterRestaurants = (
  restaurants: Restaurant[],
  category: string,
  term: string,
) => restaurants
  .filter((restaurant) => restaurant.category.includes(category))
  .filter((restaurant) => restaurant.name.includes(term.trim()));

export default filterRestaurants;
