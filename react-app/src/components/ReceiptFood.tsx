import Food from '../type/Food';

type ReceiptFoodProps = {
  food : Food
}

export default function ReceiptFood({ food }: ReceiptFoodProps) {
  return (
    <ul>
      {food.name}
      (
      {food.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      원)
    </ul>
  );
}
