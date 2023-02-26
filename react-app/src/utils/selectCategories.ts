import { TRestaurantsResponse } from '../types/restaurant';

function selectCategories(restaurants: TRestaurantsResponse[]): string[] {
  return restaurants.reduce((acc: string[], restaurant: TRestaurantsResponse) => {
    const { category } = restaurant;

    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}

export default selectCategories;
