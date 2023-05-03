import Restaurant from '../types/Restaurant';

export default function selectCategories(restaurants: Restaurant[]): string[] {
  return restaurants.reduce((acc: string[], restaurant: Restaurant) => {
    const { category } = restaurant;

    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}

// const categories = restaurants.reduce(
//   (arr: string[], cur) =>
//     arr.includes(cur.category) ? arr : [...arr, cur.category],
//   ['전체']
// );
