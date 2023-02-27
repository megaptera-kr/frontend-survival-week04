import Restaurant from '../types/Restaurant';

export default function makeCategories(restaurants: Restaurant[]) {
  const categoriesInData = restaurants.reduce((
    acc: string[],
    restaurant: Restaurant,
  ) => {
    const { category } = restaurant;

    return acc.includes(category) ? acc : [...acc, category];
  }, []);

  return ['전체', ...categoriesInData];
}
