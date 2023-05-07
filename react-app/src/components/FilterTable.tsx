import FilterCategory from './FilterCategory';
import FilterSearch from './FilterSearch';

type FilterTableProps = {
  setKeyword: (value : string)=> void;
  setCategory: (value : string)=> void;
}

export default function FilterTable({
  setKeyword,
  setCategory,
}: FilterTableProps) {
  return (
    <div>
      <FilterSearch
        setKeyword={setKeyword}
      />
      <FilterCategory
        setCategory={setCategory}
      />
    </div>
  );
}
