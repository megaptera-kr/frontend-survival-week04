import { Restaurant } from '../types/restaurant';

function normalize(text:string) {
  return text.trim().toLocaleLowerCase();
}

export default function filterRestaurant(
  restaurantData:Restaurant[],
  filterText:string,
  filterButton:string,
):Restaurant[] {
  const filteredRestaurant = restaurantData
    .filter((restaurant) => {
      if (filterButton === '전체') return true;
      return restaurant.category === filterButton;
    });

  const query = normalize(filterText);

  if (!query) return filteredRestaurant;

  const contains = (restaurant:Restaurant) => normalize(restaurant.name).includes(query);

  return filteredRestaurant.filter(contains);
}
