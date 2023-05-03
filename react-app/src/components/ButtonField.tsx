import React from 'react';

interface ButtonFieldProps {
    setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function ButtonField({ setFilterCategory }: ButtonFieldProps) {
  const categories = ['전체', '중식', '한식', '일식'];

  const handleClick = (category: string) => {
    setFilterCategory(category);
  };

  return (
    <ul style={{ padding: 0 }}>
      <li style={{ listStyle: 'none' }}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            style={{ marginRight: 15 }}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))}
      </li>
    </ul>
  );
}
