import React from 'react';

type TextFieldProps = {
  filterText : string,
  setFilterText : (value:string) =>void
}

export default function TextField({ filterText, setFilterText }: TextFieldProps) {
  function handleText(e:React.ChangeEvent<HTMLInputElement>) {
    setFilterText(e.target.value);
  }

  return (
    <label>
      검색
      <input type="text" value={filterText} onChange={handleText} placeholder="식당 이름" />
    </label>
  );
}
