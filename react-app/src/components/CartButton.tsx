import Food from '../types/Food';

import useCart from '../hooks/useCart';

type CartButtonProps = {
  type: '추가' | '삭제';
  food: Food;
  index: number;
};

function CartButton({ type, food, index }: CartButtonProps) {
  const { addCart, removeCart } = useCart();

  const handleClick = {
    추가: () => addCart(food),
    삭제: () => removeCart(index),
  }[type];

  return (
    <button type="button" onClick={handleClick}>
      {type}
    </button>
  );
}

export default CartButton;
