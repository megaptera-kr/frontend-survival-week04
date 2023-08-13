import ButtonFiled from './ButtonFiled';
import InputFiled from './InputFiled';

type SearchBarProps = {
    categories: string[];
    filterText: string;
    setFilterText: (value:string) => void;
    setFilterButton: (value:string) => void;
}

export default function SearchBar({
  categories,
  filterText,
  setFilterText,
  setFilterButton,
}:SearchBarProps) {
  return (
    <>
      <InputFiled
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ButtonFiled
        categories={categories}
        setFilterButton={setFilterButton}
      />
    </>
  );
}
