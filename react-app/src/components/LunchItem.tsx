import MenuType from '../types/MenuType';

type LunchItemProps ={
    lunch: MenuType,
    index: number,
    handelCancel: (index: number) => void
}

export default function LunchItem({
  lunch,
  index,
  handelCancel,
}:LunchItemProps) {
  const { name, price } = lunch;
  return (
    <div>
      <span>
        {name}
        (
        {price}
        )원
      </span>
      <button
        type="button"
        onClick={() => { handelCancel(index); }}
      >
        취소

      </button>
    </div>
  );
}
