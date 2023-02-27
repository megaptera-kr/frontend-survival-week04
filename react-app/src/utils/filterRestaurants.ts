import Restaurant from '../types/Restaurants';

type FilterOptions = {
    filterText: string;
    filterCategory: string;
}

const normalize = (text:string) => (
  text.trim().toLowerCase()
);

const filterRestaurants = (
  restaurants:Restaurant[],
  { filterText, filterCategory }:FilterOptions,
) => {
  const match = (restaurant: Restaurant) => (
    restaurant.category === filterCategory
  );

  const filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter(match);

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant:Restaurant) => (
    normalize(restaurant.name).includes(query)
  );

  return filteredRestaurants.filter(contains);
};

export default filterRestaurants;
