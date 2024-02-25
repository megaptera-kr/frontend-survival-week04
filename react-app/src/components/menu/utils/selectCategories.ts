import Restaurant, { Category } from '../../../types/Restaurant';

export default function selectCategories(restaurants: Restaurant[]): Category[] {
  return restaurants.reduce((acc: Category[], restaurant: Restaurant) => {
    const { category } = restaurant;

    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}
