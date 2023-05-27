import { useState } from 'react';

import MenuTable from './MenuTable';
import SerchBar from './SerchBar';

import RestaurantsType from '../types/RestaurantsType';

import filterRestaurants from '../utils/filterRestaurants';
import selectCategories from '../utils/selectCategories';

type MainContainerProps = {restaurants: RestaurantsType[]}

export default function MainContainer({ restaurants }: MainContainerProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategories, setFilterCategories] = useState<string>('전체');

  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(
    restaurants,
    { filterText, filterCategories },
  );

  return (
    <div>
      <SerchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategories={setFilterCategories}
      />
      <MenuTable restaurants={filteredRestaurants} />
    </div>
  );
}
