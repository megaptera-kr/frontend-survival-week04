import Food from '../types/Food';

type CartItemProps = {
  key: string;
  food: Food;
  index: number;
  onClickCancel: (index:number) => void;
}

export default function CartItem({
  key, food, index, onClickCancel,

}:CartItemProps) {
  const { name, price } = food;

  return (
    <ul>
      <li key={key}>
        {name}
        (
        {price.toLocaleString()}
        원)
      </li>
      <button
        type="button"
        onClick={() => onClickCancel(index)}
      >
        취소
      </button>
    </ul>
  );
}
