import Restaurant from '../types/Restaurant';

const normalize = (text: string) => text.trim().toLocaleLowerCase();

type FilterCondition = {
    searchText: string
    selectCategory: string
}

export default (
  restaurants: Restaurant[],
  { searchText, selectCategory }:FilterCondition,
):Restaurant[] => {
  const filteredRestaurants = selectCategory === '전체'
    ? restaurants
    : restaurants.filter(
      (restaurant) => selectCategory === restaurant.category,
    );

  const query = normalize(searchText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurant) => normalize(restaurant.name).includes(query);

  return filteredRestaurants.filter(contains);
};
