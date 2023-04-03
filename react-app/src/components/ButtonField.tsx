import { ChangeEvent } from 'react';

interface ButtonFieldProps {
    filterCategory: string;
    setFilterCategory: (e: ChangeEvent<HTMLButtonElement>) => void;
}

export default function ButtonField({ filterCategory, setFilterCategory }: ButtonFieldProps) {
  const categories = ['전체', '중식', '한식', '일식'];

  const handleClick = (e: ChangeEvent<HTMLButtonElement>) => {
    const { value } = e.target;
    setFilterCategory(value);
  };

  return (
    <ul style={{ padding: 0 }}>
      <li style={{ listStyle: 'none' }}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            name={category}
            value={category}
            style={{ marginRight: 15 }}
            onClick={handleClick}
          >
            {category}
          </button>
        ))}
      </li>
    </ul>
  );
}
