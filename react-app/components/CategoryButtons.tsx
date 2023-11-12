import { Category } from '../types';

type Props = {
  setCategory : React.Dispatch<React.SetStateAction<Category>>;
}

const categories : Array<{id : string, name :Category}> = [
  { id: 'all', name: '전체' },
  { id: 'chinese', name: '중식' },
  { id: 'korea', name: '한식' },
  { id: 'japanese', name: '일식' },
];

function CategoryButtons({ setCategory } : Props) {
  const handleClick = (category : Category) => {
    setCategory(category);
  };

  return (
    <ul style={{
      display: 'flex', gap: '20px',
    }}
    >
      {categories.map((el) => (
        <li key={el.id}>
          <button type="button" onClick={() => handleClick(el.name)}>{el.name}</button>
        </li>
      ))}

    </ul>
  );
}

export default CategoryButtons;
