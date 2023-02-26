import { TRestaurantsResponse } from '../types/restaurant';

type filterCondition = {

  filterText: string
  filterCategoryButton: string
}

const normalize = (text: string) => text.trim().toLocaleLowerCase();

const findRestaurants = (restaurants: TRestaurantsResponse[], {
  filterText,
  filterCategoryButton,
}: filterCondition) => {
  const match = (restaurant: TRestaurantsResponse) => restaurant.category === filterCategoryButton;

  const matchCategoryRestaurant = filterCategoryButton === '전체'
    ? restaurants
    : restaurants.filter(match);

  const query = normalize(filterText);

  if (!query) {
    return matchCategoryRestaurant;
  }

  const contains = (restaurant: TRestaurantsResponse) => (
    normalize(restaurant.name).includes(query)
  );

  return matchCategoryRestaurant.filter(contains);
};
export default findRestaurants;
