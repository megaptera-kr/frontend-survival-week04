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
      <SearchInput handleSearchRestaurantName={handleSearchRestaurantName} />
      <div className='category'>
        <ul className='category-ul'>
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
