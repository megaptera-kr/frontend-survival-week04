import { ChangeEvent } from 'react';
import TextField from './TextField';
import ButtonField from './ButtonField';

interface SearchBarProps {
    filterText: string;
    setFilterText: (e: ChangeEvent<HTMLInputElement>) => void;
    filterCategory: string;
    setFilterCategory: (e: ChangeEvent<HTMLButtonElement>) => void;
}

export default function SearchBar({
  filterText, setFilterText, filterCategory, setFilterCategory,
}: SearchBarProps) {
  return (
    <>
      <TextField
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ButtonField
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    </>
  );
}
