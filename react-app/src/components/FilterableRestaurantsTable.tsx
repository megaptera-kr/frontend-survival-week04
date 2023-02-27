import { useState } from 'react';
import Searchbar from './Searchbar';
import RestaurantsTable from './RestaurantsTable';
import findRestaurants from '../utils/findRestaurants';
import { TRestaurantsResponse } from '../types/restaurant';
import selectCategories from '../utils/selectCategories';

const DEFAULT_BUTTON_VALUE = '전체';

type FilterableRestaurantsTableProps = {
  restaurants: TRestaurantsResponse[]
}

function FilterableRestaurantsTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  const [filterText, setFilterText] = useState('');
  const [filterCategoryButton, setFilterCategoryButton] = useState(DEFAULT_BUTTON_VALUE);

  const categories = selectCategories(restaurants);

  const filteredRestaurants = findRestaurants(restaurants, {
    filterText,
    filterCategoryButton,
  });

  return (
    <div className="filterable-restaurant-table">
      <Searchbar
        categories={categories}
        filterText={filterText}
        onChange={(value: string) => setFilterText(value)}
        onClickFilterButton={(value: string) => setFilterCategoryButton(value)}
      />
      <RestaurantsTable
        restaurants={filteredRestaurants}
      />

    </div>
  );
}

export default FilterableRestaurantsTable;
