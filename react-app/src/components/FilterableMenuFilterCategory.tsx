import categoryList from '../constants/categoryList';

type FilterableMenuFilterCategory = {
  handleClickFilterCategory: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function FilterableMenuFilterCategory({
  handleClickFilterCategory,
}: FilterableMenuFilterCategory) {
  return (
    <ul className="category-ul">
      {categoryList.map((item, index) => (
        <li key={item} className="category-li">
          <button
            type="button"
            value={item}
            onClick={handleClickFilterCategory}
            className={`category-button-${index}`}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
