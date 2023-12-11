import Restaurant from '../types/Restaurant';

import selectCategories from '../utils/selectCategories';
import FilterButtonField from './FilterButtonField';
import SearchField from './SearchField';

type SearchBarProps = {
    restaurants: Restaurant[]
    filterText: string
    setFilterText: (value: string)=>void
    filterCategory: string
    setFilterCategory: (value: string)=>void
};

export default function SearchBar(
  {
    restaurants,
    filterText,
    setFilterText,
    filterCategory,
    setFilterCategory,
  }: SearchBarProps,
) {
  const categories: string[] = selectCategories(restaurants);
  return (
    <>
      <SearchField
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <FilterButtonField
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    </>
  );
}
