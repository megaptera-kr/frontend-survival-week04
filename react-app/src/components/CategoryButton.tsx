import { MouseEvent } from 'react';

type CategoryButtonProps ={
  category: string;
  setCategory: (value : string)=> void;

}

export default function CategoryButton({
  category,
  setCategory,
} : CategoryButtonProps) {
  const handleClick = (event : MouseEvent<HTMLButtonElement>) => (
    setCategory(event.currentTarget.value)
  );
  return (
    <button
      type="button"
      onClick={handleClick}
      value={category}
    >
      {category}
    </button>
  );
}
