import { useMemo, useState } from 'react';

import Restaurant, { Category } from '../../../types/Restaurant';

import normalize from '../../../utils/string';

type CategoryFilterProps = {
  restaurants: Restaurant[]
}

function useCategoryFilter({ restaurants } : CategoryFilterProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<Category>('전체');

  const filterRestaurants = useMemo(() => {
    const filteredRestaurants = filterCategory === '전체'
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === filterCategory);

    const query = normalize(filterText);

    if (!query) {
      return filteredRestaurants;
    }

    const contains = (restaurant: Restaurant) => (
      normalize(restaurant.name).includes(query)
    );

    return filteredRestaurants.filter(contains);
  }, [restaurants, filterText, filterCategory]);

  return {
    filterText,
    setFilterText,
    setFilterCategory,
    filterRestaurants,
  };
}

export default useCategoryFilter;
