import React from 'react';

function SearchBar() {
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
        />
      </label>
    </section>
  );
}

export default SearchBar;
