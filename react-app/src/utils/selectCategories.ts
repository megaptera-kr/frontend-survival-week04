import Restaurant from '../types/Restaurant';

export default function selectCategories(restaurants: Restaurant[]) {
  return restaurants.reduce((acc, restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, ['전체']);
}
