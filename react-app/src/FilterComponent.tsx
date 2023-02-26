import React from 'react';
import filterComponentProps from './types/filterComponentProps';
import categoryList from './data/categoryList';

export default function FilterComponent(
  {
    searchText, setSearchText, setCategoryText,
  }: filterComponentProps,
) {
  const handleSearchText = function handleSearchText(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchText(value);
  };

  const handleCategoryText = function handleCategoryText(a: string) {
    setCategoryText(a);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
        }}
      >
        <label>
          검색
          <input
            type="text"
            placeholder="식당 이름"
            value={searchText}
            onChange={
              handleSearchText
            }
          />
        </label>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        {
          categoryList.map(
            (el: string) => (
              <button
                key={el}
                type="button"
                onClick={() => {
                  handleCategoryText(el);
                }}
              >
                {el}
              </button>
            ),
          )
        }
      </div>
    </>
  );
}
