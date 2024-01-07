import React from 'react';

type SearchBarProps = {
  title: string;
  setQuery: (value: string) => void;
  query: string
};
function SearchBar({ title, setQuery, query }: SearchBarProps) {
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <label htmlFor="search-id">{title}</label>
      <input id="search-id" value={query} onChange={handleChangeText} />
    </div>
  );
}

export default SearchBar;
