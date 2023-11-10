import categoryList from '../constants/categoryList';

type FilterableMenuFilterCategory = {
  handleClickFilterCategory: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function FilterableMenuFilterCategory({
  handleClickFilterCategory,
}: FilterableMenuFilterCategory) {
  return (
    <ul
      style={{
        display: 'flex',
        padding: 0,
        listStyle: 'none',
        gap: '16px',
      }}
    >
      {categoryList.map((item) => (
        <li key={item}>
          <button
            type='button'
            value={item}
            onClick={handleClickFilterCategory}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
