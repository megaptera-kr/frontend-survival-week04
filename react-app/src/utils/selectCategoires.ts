import Restaurant from '../types/Restaurant';

type selectCategories = (restaurant: Restaurant[]) => string[];

const selectCategoires: selectCategories = (restaurants) => restaurants.reduce((
  acc: string[],
  restaurant: Restaurant,
) => (
  acc.includes(restaurant.category) ? acc : [...acc, restaurant.category]
), ['전체']);

export default selectCategoires;
