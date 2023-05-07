import Restaurant from '../types/Restaurant';

type filterRestaurantsProps = (
    restaurants: Restaurant[],
    filters: {
      filterText: string,
      filterCategory: string,
    }
) => Restaurant[];

const filterRestaurants: filterRestaurantsProps = (
  restaurants,
  {
    filterText,
    filterCategory,
  },
) => {
  const query = filterText.trim();

  const contains = (restaurant: Restaurant) => (
    restaurant.name.includes(query)
    && (filterCategory === '전체' || filterCategory === restaurant.category)
  );

  return restaurants.filter(contains);
};
export default filterRestaurants;
