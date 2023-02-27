import { HTMLAttributes } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { TRestaurantMenu } from '../../types/restaurant';
import Food from './Food';

type MenuProps = {
  menu: TRestaurantMenu[]
} & HTMLAttributes<Element>;

function Menu({ menu }: MenuProps) {
  const [selectedFood, setSelectedFood] = useLocalStorage<TRestaurantMenu[]>('cart', []);

  const onClickToCart = (food: TRestaurantMenu) => {
    setSelectedFood([
      ...selectedFood,
      food,
    ]);
  };

  return (
    <ul>
      {menu.map((food, index) => {
        const { id } = food;

        const key = `${id}-${index}`;

        return (
          <Food
            key={key}
            food={food}
          >
            <button
              style={{ marginLeft: '.5rem' }}
              name={`#${food.name}`}
              type="button"
              onClick={() => onClickToCart(food)}
            >
              선택
            </button>
          </Food>
        );
      })}
    </ul>
  );
}

export default Menu;
