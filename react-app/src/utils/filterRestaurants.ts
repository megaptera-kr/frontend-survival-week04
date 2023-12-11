import Restaurant from '../types/Restaurant';

type FilterCondition = {
    filterText: string;
    filterCategory: string;
  };

export default function filterRestaurants(
  restaurantList: Restaurant[],
  { filterText, filterCategory }: FilterCondition,
) {
  const filteredRestaurant = restaurantList.filter(
    (restaurant) => restaurant.category === filterCategory || filterCategory === '전체',
  );

  const query = filterText.trim().toLocaleLowerCase();

  if (!query) {
    return filteredRestaurant;
  }

  return filteredRestaurant.filter((restaurant) => restaurant.name.includes(query));
}
