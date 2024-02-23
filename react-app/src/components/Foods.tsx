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
  const newId = useRef(0);
  const newkey = useRef(0);

  const handelCreateClick = (name: string, price: number) => {
    setChoiceFoods([...choiceFoods, { id: newId.current++, name, price }]);
  };

  const handleRemoveClick = (targetId: string) => {
    console.log(targetId);

    const filterChoiceFoods = choiceFoods.filter(
      (choiceFood) => choiceFood.id !== targetId
    );
    setChoiceFoods(filterChoiceFoods);
  };

  return (
    <ul>
      {menu.map((it) => (
        <li key={`origin_${it.id}_${newkey.current++}`}>
          <span>
            {it.name}
            {' ( '}
            {it.price.toLocaleString()}
            {' 원 '}
            {' ) '}
          </span>
          {btnName === '선택' ? (
            <button
              type="button"
              onClick={() => handelCreateClick(it.name, it.price)}
            >
              {btnName}
            </button>
          ) : (
            <button type="button" onClick={() => handleRemoveClick(it.id)}>
              {btnName}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
