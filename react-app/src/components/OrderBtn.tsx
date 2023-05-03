import Food from '../types/Food';

type OrderBtnProps = {
  foods: Food[];
  onClick: () => void;
}

export default function OrderBtn({ foods, onClick }: OrderBtnProps) {
  const totalOrder = foods.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <button type="button" onClick={onClick}>
      합계:
      {' '}
      {totalOrder.toLocaleString()}
      원 주문
    </button>
  );
}
