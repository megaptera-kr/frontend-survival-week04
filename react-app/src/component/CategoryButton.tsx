import Category from '../types/CategoryType';

type CategoryButtonProps = {
  category: Category | null;
};

export default function CategoryButton({ category }: CategoryButtonProps) {
  return (
    <li className='category-li'>
      <button type='button'>{category ? category.name : '전체'}</button>
    </li>
  );
}
