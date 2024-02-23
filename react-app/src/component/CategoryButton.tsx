import Category from '../types/CategoryType';

type CategoryButtonProps = {
  category: Category | undefined;
  handleCategoryName: (value: string) => void;
};

export default function CategoryButton({
  category,
  handleCategoryName,
}: CategoryButtonProps) {
  const handleClick = () => {
    let query = '';
    if (category) {
      query = category.name ?? '';
    }
    handleCategoryName(query);
  };

  return (
    <li className='category-li'>
      <button type='button' onClick={handleClick}>
        {category ? category.name : '전체'}
      </button>
    </li>
  );
}
