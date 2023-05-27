import RestaurantsType from '../types/RestaurantsType';

export default function selectCategories(restaurants: RestaurantsType[]): string[] {
  return restaurants.reduce((acc: string[], restaurant: RestaurantsType) => {
    const { category } = restaurant;

    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}
