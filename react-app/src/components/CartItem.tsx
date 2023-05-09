import Food from '../types/Food';
import MenuItem from './MenuItem';

type CartItemProps = {
    food: Food;
    index: number;
    onClickCancle: (index: number) => void;
}

export default function CartItem({ food, index, onClickCancle }: CartItemProps) {
  return (
    <MenuItem food={food}>
      <button
        type="button"
        onClick={() => onClickCancle(index)}
      >
        취소
      </button>
    </MenuItem>
  );
}
