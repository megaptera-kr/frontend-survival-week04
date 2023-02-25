import Restaurant from '../types/Restaurants';

export default function selectCategory(
  restaurantsData: Restaurant[],
) : string[] {
  return restaurantsData.reduce((acc: string[], restaurant: Restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}
