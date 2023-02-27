import SearchBar from './SearchBar';

import FilterButton from './FilterButton';

import makeCategories from '../utils/makeCategories';

import Restaurant from '../types/Restaurant';

type SearchBarProps = {
    restaurants: Restaurant[];
    filterText: string;
    setFilterText: (filterText: string) => void;
    setFilterCategory: (category: string) => void;
}

export default function SearchField({
  restaurants, filterText, setFilterText, setFilterCategory,
}: SearchBarProps) {
  const categories = makeCategories(restaurants);

  return (
    <div>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <div>
        {categories.map((category) => (
          <FilterButton
            key={category}
            category={category}
            setFilterCategory={setFilterCategory}
          />
        ))}
      </div>
    </div>
  );
}
