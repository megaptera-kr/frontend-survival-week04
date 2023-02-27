import { ChangeEvent } from 'react';

type SearchBarProps = {
    filterText: string;
    setFilterText: (filterText: string) => void;
}

export default function SearchBar({ filterText, setFilterText }: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <label htmlFor="search-bar">검색</label>
      <input
        id="search-bar"
        type="text"
        placeholder="식당 이름"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
