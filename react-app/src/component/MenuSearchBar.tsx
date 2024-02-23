import CategoryButton from './CategoryButton';

import Category from '../types/CategoryType';

type MenuSearchBarProps = {
  categories: Category[];
  handleCategoryName: (value: string) => void;
};

function MenuSearchBar({ categories, handleCategoryName }: MenuSearchBarProps) {
  return (
    <div className='searchbar'>
      <label htmlFor='input-search'>검색</label>
      <input type='text' id='input-search' placeholder='식당 이름' />

      <div className='category'>
        <ul className='category-ul'>
          <CategoryButton
            category={undefined}
            handleCategoryName={handleCategoryName}
          />
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              handleCategoryName={handleCategoryName}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuSearchBar;
