import SearchBar from './SearchBar';
import CategoriesBtn from './CategoriesBtn';

type SearchAndFilterProps = {
  query: string;
  setQuery: (query: string) => void;
  categories: string[];
  setCategory: (category: string) => void;
};

function SearchAndFilter({
  query,
  setQuery,
  categories,
  setCategory,
}: SearchAndFilterProps) {
  return (
    <div>
      <SearchBar title="검색" query={query} setQuery={setQuery} />
      <CategoriesBtn categories={categories} setCategory={setCategory} />
    </div>
  );
}

export default SearchAndFilter;
