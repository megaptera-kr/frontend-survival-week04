import CategoryButton from './CategoryButton';

import Category from '../types/CategoryType';

type MenuSearchBarProps = {
  categories: Category[];
};

function MenuSearchBar({ categories }: MenuSearchBarProps) {
  return (
    <div className='searchbar'>
      <label htmlFor='input-search'>검색</label>
      <input type='text' id='input-search' placeholder='식당 이름' />

      <div className='category'>
        <ul className='category-ul'>
          <CategoryButton category={null} />
          {categories.map((category) => (
            <CategoryButton key={category.id} category={category} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuSearchBar;
