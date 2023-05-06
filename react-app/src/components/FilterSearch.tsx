import { ChangeEvent } from 'react';

type FilterSearchProps = {
  keyword: string;
  setKeyword: (value : string)=> void;
}

export default function filterSearch({
  keyword,
  setKeyword,
}: FilterSearchProps) {
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => (
    setKeyword(event.target.value)
  );

  return (

    <div>
      <label htmlFor="filterSearch">검색</label>
      <input
        id="filterSearch"
        type="text"
        placeholder="식당 이름"
        onChange={handleTextChange}
      />
    </div>
  );
}
