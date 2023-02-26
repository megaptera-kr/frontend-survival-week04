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
    <ul className="menu-list">
      {
        menu.map((food) => (
          <Food key={`${food.name}-${food.id}`} food={food}>
            <button
              type="button"
              onClick={() => onClickToCart(food)}
            >
              선택
            </button>
          </Food>
        ))
      }
    </ul>
  );
}

export default Menu;
