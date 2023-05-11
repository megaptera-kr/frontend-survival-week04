import Categories from './Categories';
import TextField from './TextField';

type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (text: string) => void;
  setFilterCategory: (text: string) => void;
}

export default function SearchBar({
  categories,
  filterText,
  setFilterText,
  setFilterCategory,
}: SearchBarProps) {
  return (
    <>
      <div>
        <TextField
          label="검색"
          placeholder="식당 이름"
          filterText={filterText}
          setFilterText={setFilterText}
        />
      </div>
      <Categories categories={categories} setFilterCategory={setFilterCategory} />
    </>
  );
}
