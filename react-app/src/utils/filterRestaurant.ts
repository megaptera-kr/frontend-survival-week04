import type { Restaurants } from '../types/types';

type filterConditionsType = {
  filterText: string;
  category: string;
}

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

export default function filterRestaurants(
  restaurants: Restaurants[],
  {
    filterText,
    category,
  }:filterConditionsType,
) {
  const query = normalize(filterText);
  const filterCategory = restaurants.filter((el) => el.category === category);
  const contains = (restaurant: Restaurants) => restaurant.name.includes(query);

  if (category === '전체') return restaurants.filter(contains);
  if (!query && category === '전체') {
    return restaurants;
  }
  if (category !== '전체') {
    const filterName = restaurants.filter(contains);
    return filterName.filter((el) => el.category === category);
  }

  if (!query) {
    return filterCategory;
  }

  return restaurants.filter(contains);
}
