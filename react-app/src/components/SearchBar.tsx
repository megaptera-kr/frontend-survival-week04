import Categories from './Categories';
import TextField from './TextField';

type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (text: string) => void;
  setFilterCategory: (text: string) => void;
};

export default function SearchBar({
  categories,
  filterText,
  setFilterText,
  setFilterCategory,
}: SearchBarProps) {
  return (
    <div>
      {/* 검색창 */}
      <TextField
        label="검색"
        placeholder="식당 이름"
        text={filterText}
        setText={setFilterText}
      />
      {/* 카테고리 버튼 리스트 */}
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
