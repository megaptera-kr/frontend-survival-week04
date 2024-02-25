import SearchBar from './components/SearchBar';
import RestaurantTable from './components/RestaurantTable';

import Restaurant from '../../types/Restaurant';

import useCategoryFilter from './hooks/useCategoryFilter';
import selectCategories from './utils/selectCategories';

type FilterableRestaurantTableProps = {
    restaurants: Restaurant[];
};

export default function RestaurantContainer({
  restaurants,
}: FilterableRestaurantTableProps) {
  const categories = selectCategories(restaurants);

  const {
    filterText, setFilterText,
    setFilterCategory, filterRestaurants,
  } = useCategoryFilter({ restaurants });

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filterRestaurants} />
    </div>
  );
}
