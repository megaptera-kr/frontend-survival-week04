export default function getCategories(restaurants: Restaurant[]): string[] {
  return restaurants.reduce(
    (acc: string[], restaurant: Restaurant) => {
      const { category } = restaurant;
      return acc.includes(category) ? acc : [...acc, category];
    },
    ['전체'],
  );
}
