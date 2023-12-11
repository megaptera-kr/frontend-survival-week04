import { ChangeEvent } from 'react';

type SearchFieldProps = {
    placeholder: string
    filterText: string
    setFilterText: (value: string)=>void
}

export default function SearchField({
  placeholder,
  filterText,
  setFilterText,
}:SearchFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <>
      <label htmlFor="검색" style={{ paddingRight: '1rem' }}>검색</label>
      <input
        id="검색"
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </>
  );
}
