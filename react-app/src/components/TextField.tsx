import { ChangeEvent } from 'react';

interface TextFieldProps {
    filterText: string;
    setFilterText: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField({ filterText, setFilterText }: TextFieldProps) {
  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };

  return (
    <>
      <label
        htmlFor="searchBar"
        style={{ paddingRight: 15 }}
      >
        검색
      </label>
      <input
        type="text"
        placeholder="식당 이름"
        id="searchBar"
        value={filterText}
        onChange={handleClick}
      />
    </>
  );
}
