import Restaurant from '../types/Restaurant';

type filterOptions = {
  category: string;
  keyword: string;
}
export default function filterRestaurants(restaurants: Restaurant[], {
  category,
  keyword,
}: filterOptions) : Restaurant[] {
  let filteredRestaurants = restaurants;

  if (category && category !== '전체') {
    filteredRestaurants = restaurants.filter((restaurant) => (
      restaurant.category === category
    ));
  }

  if (!keyword) {
    return filteredRestaurants;
  }

  const cleanString = (rawString:string) => (
    rawString.trim().toLowerCase()
  );

  return filteredRestaurants.filter((restaurant) => (
    cleanString(restaurant.name).includes(cleanString(keyword))
  ));
}
