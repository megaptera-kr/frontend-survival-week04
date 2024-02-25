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
    setChoiceFoods([
      ...choiceFoods,
      { id: (newId.current += 1).toString(), name, price },
    ]);
    newkey.current += 1;
  };

  const handleRemoveClick = (targetId: string) => {
    const filterChoiceFoods = choiceFoods.filter(
      (choiceFood) => choiceFood.id !== targetId
    );
    setChoiceFoods(filterChoiceFoods);
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
                onClick={() => handelCreateClick(name, price)}
              >
                {btnName}
              </button>
            ) : (
              <button type="button" onClick={() => handleRemoveClick(id)}>
                {btnName}
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
