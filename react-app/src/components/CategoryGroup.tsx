import { CategoryGroupProps } from '../types';

export default function CategoryGroup({
  categories,
  setCategory,
}: CategoryGroupProps) {
  return (
    <div className='button-group'>
      {categories.map((category) => (
        <input
          type='button'
          key={category}
          onClick={() => setCategory(category)}
          value={category}
        />
      ))}
    </div>
  );
}
