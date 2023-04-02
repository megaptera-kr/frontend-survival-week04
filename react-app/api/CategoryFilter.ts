import Restaurant from '../types/Restaurant';

export default function CategoryFilter(restaurants: Restaurant[]): string[] {
  return restaurants.reduce((acc: string[], restaurant: Restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}
