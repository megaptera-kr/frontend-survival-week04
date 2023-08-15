import { useLocalStorage } from 'usehooks-ts';
import Food from '../types/Food';

export default function CartItem({
  food,
  cartItemIndex,
}: {
  food: Food;
  cartItemIndex: number;
}) {
  const [selectedFoods, setSelectFood] = useLocalStorage<Food[]>('cart', []);
  const { name, price } = food;
  const onCancelHandler = (selectIndex: number) => {
    setSelectFood(
      selectedFoods.filter((selectFood, index) => index !== selectIndex),
    );
  };
  return (
    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <span style={{ margin: '0px auto' }}>{`${name}(${price}원)`}</span>
      <button
        style={{ marginLeft: '.5rem' }}
        name={`#${food.name}`}
        type="button"
        onClick={() => onCancelHandler(cartItemIndex)}
      >
        취소
      </button>
    </li>
  );
}
