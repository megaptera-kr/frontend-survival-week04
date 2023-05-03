import React from 'react';
import TextField from './TextField';
import ButtonField from './ButtonField';

interface SearchBarProps {
    filterText: string;
    setFilterText: React.Dispatch<React.SetStateAction<string>>;
    setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({
  filterText, setFilterText, setFilterCategory,
}: SearchBarProps) {
  return (
    <>
      <TextField
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ButtonField
        setFilterCategory={setFilterCategory}
      />
    </>
  );
}
