import Restaurant from '../types/Restaurant';

interface filterRestaurantsProps {
    restaurants: Restaurant[];
    filterText: string;
    filterCategory: string;
}

export default function filterRestaurants({
  restaurants, filterText, filterCategory,
}: filterRestaurantsProps) {
  const query = filterText.trim().toLowerCase();

  let filteredRestaurants = restaurants;

  const filteredRestaurantsName = (queryText: string) => filteredRestaurants
    .filter((filteredRestaurant) => filteredRestaurant.name.toLowerCase().includes(queryText));

  const filteredRestaurantsCategory = (CategoryItem : string) => filteredRestaurants
    .filter((filteredRestaurant) => filteredRestaurant.category === CategoryItem);

  if (query) {
    filteredRestaurants = filteredRestaurantsName(query);
  }

  if (filterCategory !== '전체') {
    filteredRestaurants = filteredRestaurantsCategory(filterCategory);
  }

  return filteredRestaurants;
}
