import CategoryFilterButtons from './CategoryFilterButtons';
import SearchBar from './SearchBar';

interface SearchFilterProps{
  categories: string[];
  filterText: string;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
}

function SearchFilter({
  categories,
  filterText, setFilterText,
  setFilterCategory,
}: SearchFilterProps) {
  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <CategoryFilterButtons
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}

export default SearchFilter;
