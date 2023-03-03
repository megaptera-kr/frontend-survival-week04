import ButtonField from './ButtonField';
import TextField from './TextField';

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
      <TextField
        label="검색"
        setFilterText={setFilterText}
      />
      <ButtonField
        categories={categories}
        setFilterButton={setFilterButton}
      />
    </div>
  );
}
