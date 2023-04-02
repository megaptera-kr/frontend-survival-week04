import ButtonContents from './ButtonContents';
import SearchField from './SearchField';

type SearchBarProps = {
  categories: string[];
  setFilterText: (value: string) => void;
  setFilterButton: (value: string) => void;
}

export default function SearchBar({
  categories,
  setFilterText,
  setFilterButton,
}: SearchBarProps) {
  return (
    <div>
      <SearchField
        label="검색"
        setFilterText={setFilterText}
      />
      <ButtonContents
        categories={categories}
        setFilterButton={setFilterButton}
      />
    </div>
  );
}
