import React from 'react';

type Props = {
  onClickCategory: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CategorySelect({ onClickCategory }: Props) {
  const CATEGORIES = ['전체', '중식', '한식', '일식'];
  return (
    <ul style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
      padding: '0',
      listStyle: 'none',
    }}
    >
      {
        CATEGORIES.map((category) => (
          <li key={category}>
            <button type="button" name={category} onClick={onClickCategory}>{category}</button>
          </li>
        ))
      }
    </ul>
  );
}

export default CategorySelect;
