import Restaurant from '../types/Restaurant';
import selectCategories from '../utils/selectCategories';

type ButtonFieldProps = {
  restaurants: Restaurant[]
  setFilterCategory: (value: string) => void
}

export default function ButtonField({ restaurants, setFilterCategory }: ButtonFieldProps) {
  const categories = selectCategories(restaurants);

  const handleClickCategoryButton = (category: string) => {
    setFilterCategory(category);
  };

  return (
    <ul
      style={{
        display: 'flex',
        margin: '16px 0px',
        listStyle: 'none',
        padding: '0px',
      }}
    >
      {categories.map((category) => (
        <li
          key={category}
          style={{ marginRight: '1rem' }}
        >
          <button
            type="button"
            onClick={() => {
              handleClickCategoryButton(category);
            }}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
