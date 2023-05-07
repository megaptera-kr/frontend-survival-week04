import SelectCategory from './SelectCateogry';
import InputBar from './InputBar';

import Restaurant from '../types/Restaurant';

type SearchBarProps = {
    restaurants: Restaurant[];
    filterText: string;
    setFilterText: (value: string) => void;
    setFilterCategory: (value: string) => void;
}

export default function SearchBar({
  restaurants,
  filterText,
  setFilterText,
  setFilterCategory,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <InputBar
        label="검색"
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <SelectCategory restaurants={restaurants} setFilterCategory={setFilterCategory} />
    </div>
  );
}
