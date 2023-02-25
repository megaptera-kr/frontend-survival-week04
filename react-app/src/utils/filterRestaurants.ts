import Restaurant from '../types/Restaurants';

type FilterConditions = {
    filterText: string;
    category: string;
  }

export default function filterRestaurants(
  restaurantsData: Restaurant[],
  { filterText, category }: FilterConditions,
) : Restaurant[] {
  const filteredRestaurantsData = restaurantsData.filter((restaurant) => (
    category === '전체' ? true : restaurant.category === category
  ));

  if (!filterText) return filteredRestaurantsData;

  return filteredRestaurantsData.filter((restaurant) => (
    restaurant.name.includes(filterText.trim())
  ));
}
