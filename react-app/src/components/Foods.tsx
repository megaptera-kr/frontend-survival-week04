import { useRef } from 'react';
import Food from '../Types/Food';

type FoodsProps = {
  btnName: string;
  menu: Food[];
  choiceFoods: Food[];
  setChoiceFoods: (food: Food[]) => void;
};

export default function Foods({
  btnName,
  menu,
  choiceFoods,
  setChoiceFoods,
}: FoodsProps) {
  // const newId = useRef(0);
  const newkey = useRef(0);

  const handelCreateClick = (food: Food) => {
    setChoiceFoods([...choiceFoods, food]);
    newkey.current += 1;
  };

  const handleRemoveClick = (targetId: string) => {
    const filterFoods = choiceFoods.filter((food) => food.id !== targetId);
    setChoiceFoods(filterFoods);
  };

  return (
    <ul>
      {menu.map((it) => {
        const { id, name, price } = it;
        return (
          <li key={`${id}_${name}_${price}_${newkey}`}>
            <span>
              {name}
              {' ( '}
              {price.toLocaleString()}
              {' 원 '}
              {' ) '}
            </span>
            {btnName === '선택' ? (
              <button
                type="button"
                name={`#${name}`}
                onClick={() => handelCreateClick(it)}
              >
                {btnName}
              </button>
            ) : (
              <button
                type="button"
                name={`#${name}`}
                onClick={() => handleRemoveClick(id)}
              >
                {btnName}
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
