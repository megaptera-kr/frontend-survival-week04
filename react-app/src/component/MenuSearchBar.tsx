import SearchInput from './SearchInput';
import CategoryButton from './CategoryButton';

import CategoryType from '../types/CategoryType';

type MenuSearchBarProps = {
  categories: CategoryType[];
  handleSearchRestaurantName: (value: string) => void;
  handleSearchCategoryName: (value: string) => void;
};

function MenuSearchBar({
  categories,
  handleSearchRestaurantName,
  handleSearchCategoryName,
}: MenuSearchBarProps) {
  return (
    <div className='searchbar'>
      <SearchInput
        placeholder='식당 이름'
        handleSearchRestaurantName={handleSearchRestaurantName}
      />
      <div className='category'>
        <ul
          className='category-ul'
          style={{ listStyle: 'none', display: 'flex', padding: '0px' }}
        >
          <CategoryButton
            category={undefined}
            handleSearchCategoryName={handleSearchCategoryName}
          />
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              handleSearchCategoryName={handleSearchCategoryName}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuSearchBar;
