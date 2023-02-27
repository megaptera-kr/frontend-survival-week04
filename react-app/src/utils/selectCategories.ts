import Restaurant from '../types/Restaurant';

export default (restaurants: Restaurant[]):string[] => restaurants.reduce(
  (acc: string[], restaurant: Restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  },
  ['전체'],
);
