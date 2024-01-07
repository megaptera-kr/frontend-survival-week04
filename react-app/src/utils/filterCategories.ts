import { Restaurant } from '../types/Restaurant';

type FilterCategoriesProps = {
  category: string;
  filteredRestaurants: Restaurant[];
};

const filterCategories = ({
  category,
  filteredRestaurants,
}: FilterCategoriesProps) => {
  if (category === '전체') {
    return filteredRestaurants;
  }
  const filteredCategories = filteredRestaurants.filter(
    (restaurant) => restaurant.category === category,
  );

  return filteredCategories;
};

export default filterCategories;
