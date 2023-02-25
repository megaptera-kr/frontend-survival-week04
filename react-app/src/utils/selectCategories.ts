import Restaurant from '../types/Restaurants';

const selectCategories = (restaurants:Restaurant[]) => restaurants.reduce(
  (acc: string[], restaurant: Restaurant) => (acc.includes(restaurant.category)
    ? acc : [...acc, restaurant.category]),
  [],
);

export default selectCategories;
