import { Category, Restaurants } from '../types';

type FilterConditions = {
    category: Category;
    query: string;
  };

const nomalize = (text: string) => text.trim().toLowerCase();

const filterRestaurant = (data : Array<Restaurants>, {
  category, query,
} : FilterConditions) => {
  const nomalizeQuery = nomalize(query);
  const filterCategory = data.filter((restaurant) => restaurant.category === category);
  const contains = (restaurant: Restaurants) => restaurant.name.includes(nomalizeQuery);

  if (!nomalizeQuery && category === '전체') return data;

  if (!nomalizeQuery) {
    return filterCategory;
  }

  if (category === '전체') return data.filter(contains);

  return filterCategory.filter(contains);
};

export default filterRestaurant;
