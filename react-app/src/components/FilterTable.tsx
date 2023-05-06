import FilterCategory from './FilterCategory';
import FilterSearch from './FilterSearch';

type FilterTableProps = {
  keyword: string;
  setKeyword: (value : string)=> void;
  category: string;
  setCategory: (value : string)=> void;
}

export default function FilterTable({
  keyword,
  setKeyword,
  category,
  setCategory,
}: FilterTableProps) {
  return (
    <div>
      <FilterSearch
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <FilterCategory
        category={category}
        setCategory={setCategory}
      />
    </div>
  );
}
