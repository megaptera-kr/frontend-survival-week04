import { useLocalStorage } from 'usehooks-ts';
import { Food } from '../types/Restaurant';
import FoodItem from './FoodItem';

interface FoodProps {
  menu: Food[];
}
export default function Foods({ menu }: FoodProps) {
  const [isCartItem, setCartItem] = useLocalStorage<Food[]>('cartItem', []);

  return (
    <ul>
      {menu.map((food) => (
        <FoodItem key={food.id} food={food}>
          <button
            type="button"
            name={`#${food.name}`}
            style={{ marginLeft: '0.5rem' }}
            onClick={() => setCartItem([food, ...isCartItem])}
          >
            선택
          </button>
        </FoodItem>
      ))}
    </ul>
  );
}
