import Restaurant from '../types/Restuarant';

export default function selectCategories(restaurants:Restaurant[]) {
  return restaurants.reduce((acc:string[], restaurant:Restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}
