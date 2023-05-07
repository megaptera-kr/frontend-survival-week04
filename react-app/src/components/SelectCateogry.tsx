import Restaurant from '../types/Restaurant';

import selectCategoires from '../utils/selectCategoires';

type SelectCategoryProps = {
    restaurants: Restaurant[];
    setFilterCategory: (value: string) => void;
}

export default function SelectCategory({
  restaurants,
  setFilterCategory,
}: SelectCategoryProps) {
  const categories = selectCategoires(restaurants);

  const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    setFilterCategory(value);
  };

  return (
    <div className="select-category">
      {categories.map((category) => (
        <button key={category} type="button" onClick={handleClick} value={category}>{category}</button>
      ))}
    </div>
  );
}
