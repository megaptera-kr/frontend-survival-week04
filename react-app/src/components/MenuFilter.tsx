import TextFiled from './TextFiled';
import CategoryButtonList from './CategoryButtonList';

import Restaurant from '../types/Restaurant';

type MenuFilterProps = {
    restaurants: Restaurant[]
    searchText: string;
    setSearchText: (value: string) => void;
    setSelectCategory: (value: string) => void;
}

export default function MenuFilter({
  restaurants,
  searchText,
  setSearchText,
  setSelectCategory,
}:MenuFilterProps) {
  return (
    <div>
      <TextFiled
        labelText="검색"
        placeholder="식당 이름"
        text={searchText}
        setText={setSearchText}
      />
      <CategoryButtonList
        restaurants={restaurants}
        setSelectCategory={setSelectCategory}
      />
    </div>
  );
}
