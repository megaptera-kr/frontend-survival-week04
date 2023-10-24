import { useLocalStorage } from 'usehooks-ts';

import Food from '../types/Food';

type MenuProps = {
  menu: Food[];
}

export default function Menu({ menu }: MenuProps) {
  const [selectedFoods, selectFood] = useLocalStorage<Food[]>('cart', []);

  if (!menu.length) {
    return (
      <p>메뉴가 존재하지 않습니다</p>
    );
  }

  const handleClickSelect = (food: Food) => {
    selectFood([
      ...selectedFoods,
      food,
    ]);
  };

  return (
    <ul>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        const { name, price } = food;

        return (
          <li key={key}>
            {name}
            (
            {price.toLocaleString()}
            원)
            <button
              name={`#${food.name}`}
              type="button"
              onClick={() => handleClickSelect(food)}
            >
              선택
            </button>
          </li>
        );
      })}
    </ul>
  );
}
