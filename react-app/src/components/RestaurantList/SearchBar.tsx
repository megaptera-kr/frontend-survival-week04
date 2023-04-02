import React from 'react';

type Props = {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ onChangeInput }: Props) {
  return (
    <section>
      <label>
        검색
        <input
          style={{
            marginLeft: '1rem',
          }}
          type="text"
          placeholder="식당 이름"
          onChange={onChangeInput}
        />
      </label>
    </section>
  );
}

export default SearchBar;
