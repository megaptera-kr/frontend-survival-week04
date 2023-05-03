import Food from '../types/Food';
import FoodItem from './FoodItem';

type CartItemProps = {
  food: Food;
  index: number;
  onClickCancel: (index: number) => void;
}

export default function CartItem({
  food, index, onClickCancel,
}: CartItemProps) {
  return (
    <FoodItem food={food}>
      <button
        type="button"
        name={`#${food.name}`}
        onClick={() => onClickCancel(index)}
      >
        취소
      </button>
    </FoodItem>
  );
}
