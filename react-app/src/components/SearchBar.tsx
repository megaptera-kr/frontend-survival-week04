import Categories from './Categories';
import TextField from './TextField';

type SearchBarProps = {
  filterText : string
  setFilterText: (value: string) => void
  setFilterCategory: (value: string) => void
  categories : string[]
}

export default function SearchBar({
  filterText, setFilterText, setFilterCategory, categories,
}: SearchBarProps) {
  return (
    <>
      <TextField label="검색" placeholder="식당 이름" text={filterText} setText={setFilterText} />
      <Categories categories={categories} setFilterCategory={setFilterCategory} />
    </>
  );
}
