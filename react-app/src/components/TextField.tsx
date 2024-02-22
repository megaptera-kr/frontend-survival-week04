import React from 'react';

type TextFieldProps = {
  filterText: string;
  setFilterText: (value: string) => void;
};

export default function TextField({
  filterText,
  setFilterText,
}: TextFieldProps) {
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };
  return (
    <div className="TextField">
      <label htmlFor="search">검색</label>
      <input
        type="text"
        placeholder="식당이름"
        id="search"
        value={filterText}
        onChange={handelChange}
      />
    </div>
  );
}
