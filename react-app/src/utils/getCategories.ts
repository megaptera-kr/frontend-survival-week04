import Restaurant from '../types/Restaurant';

const getCategories = (restaurants : Restaurant[]) => {
  const categories = restaurants.map((restaurant) => restaurant.category);

  return ['전체', ...new Set(categories)];
};

export default getCategories;
