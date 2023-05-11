import React from 'react';

type TextFieldProps = {
  placeholder: string;
  filterText: string;
  setFilterText(value: string): void;
}

export default function TextField({
  placeholder, filterText, setFilterText,
}: TextFieldProps) {
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  return (
    <div style={{
      display: 'flex',
    }}
    >
      <label
        htmlFor="search"
        style={{
          marginRight: '1rem',
        }}
      >
        검색
      </label>
      <input
        id="search"
        type="input"
        placeholder={placeholder}
        value={filterText}
        onChange={handlerChange}
      />
    </div>
  );
}
