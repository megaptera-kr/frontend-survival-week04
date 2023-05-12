import Restaurants from '../type/Restaurants';

type restaurantFilterProps = {
  filterCategory : string,
  filterText : string,
  restaurants : Restaurants[]
}

export default function restaurantFilter(
  { filterCategory, filterText, restaurants }: restaurantFilterProps,
) {
  return restaurants.filter((restaurant) => (
    (restaurant.name).includes(filterText.trim())
  )).filter((restaurant) => (
    ((restaurant.category === filterCategory) || (filterCategory === '전체'))
  ));
}
