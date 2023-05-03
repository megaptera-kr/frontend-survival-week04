import React from 'react';

interface CategoryFilterButtonsProps{
  categories : string[];
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
}

function CategoryFilterButtons({
  categories, setFilterCategory,
}: CategoryFilterButtonsProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.innerText;
    setFilterCategory(value);
  };

  return (
    <ul style={{
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      width: 'max-content',
      justifyContent: 'space-between',
    }}
    >
      {
        categories.map((category) => (
          <li
            key={category}
            style={{ margin: '0 5px' }}
          >
            <button
              type="button"
              onClick={handleClick}
            >
              {category}

            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default CategoryFilterButtons;
