import Food from '../types/Food';

type OrderButtonProps = {
    foods: Food[];
    onClickOrder: () => void;
}

export default function OrderButton({ foods, onClickOrder }: OrderButtonProps) {
  const totalPrice = foods.reduce((sum, food) => sum + food.price, 0);

  return (
    <button type="button" onClick={onClickOrder}>
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
