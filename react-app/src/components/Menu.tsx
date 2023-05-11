import { useLocalStorage } from 'usehooks-ts';
import Food from '../types/Food';
import MenuItem from './MenuItem';

type FoodsProps = {
    menu: Food[]
}

export default function Menu({ menu }: FoodsProps) {
  const [selectFoods, selectFood] = useLocalStorage<Food[]>('cart', []);

  if (!menu.length) {
    return (
      <p>메뉴가 존재하지 않습니다.</p>
    );
  }

  const handleClickSelect = (food: Food) => {
    selectFood([
      ...selectFoods, food,
    ]);
  };

  return (
    <ul>
      {menu.map((food, index) => {
        const key = `${food}-${index}`;

        return (
          <MenuItem
            key={key}
            food={food}
          >
            <button
              type="button"
              name={`#${food.name}`}
              onClick={() => handleClickSelect(food)}
            >
              선택
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}
