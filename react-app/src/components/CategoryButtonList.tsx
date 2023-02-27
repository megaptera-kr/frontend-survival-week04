import CategoryButton from './CategoryButton';

import selectCategories from '../utils/selectCategories';

import Restaurant from '../types/Restaurant';

type CategoryButtonListProps = {
    restaurants: Restaurant[];
    setSelectCategory: (value: string) => void;
}

export default function CategoryButtonList({
  restaurants,
  setSelectCategory,
}:CategoryButtonListProps) {
  const categories = selectCategories(restaurants);

  const onClick = (category: string) => () => {
    setSelectCategory(category);
  };

  return (
    <ul style={{ display: 'flex', padding: '0px', listStyle: 'none' }}>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onClick={onClick(category)}
        />
      ))}
    </ul>
  );
}
