import { useState } from "react";

interface SearchBarProps {
  setSearchValue: (value: string) => void
  handleSearch: (value: string) => void
}

function SearchBar({ setSearchValue, handleSearch }: SearchBarProps) {
  const onChange = (event: React.ChangeEvent<HTMLElement>) => {
    const targer = event.target
    setSearchValue(targer.value)
  }
  return (
    <div>
      <input type="text" onChange={onChange} placeholder="식당명" />
      <button type="button" onClick={handleSearch}>검색</button>
    </div>
  );
}
export default SearchBar;
