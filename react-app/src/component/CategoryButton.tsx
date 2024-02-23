import CategoryType from '../types/CategoryType';

type CategoryButtonProps = {
  category: CategoryType | undefined;
  handleSearchCategoryName: (value: string) => void;
};

export default function CategoryButton({
  category,
  handleSearchCategoryName,
}: CategoryButtonProps) {
  const handleClick = () => {
    let query = '';
    if (category) {
      query = category.name ?? '';
    }
    handleSearchCategoryName(query);
  };

  return (
    <li className='category-li'>
      <button type='button' onClick={handleClick}>
        {category ? category.name : '전체'}
      </button>
    </li>
  );
}
