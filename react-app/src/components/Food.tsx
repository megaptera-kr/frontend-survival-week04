import Food from '../Types/Food';

type FoodProps = {
  menu: Food[];
};

export default function Food({ menu }: FoodProps) {
  return (
    <ul>
      {menu.map((it) => (
        <li key={it.name}>
          <span>
            {it.name}
            {' ( '}
            {it.price.toLocaleString()}
            {' 원 '}
            {' ) '}
          </span>
          <button type="button">선택</button>
        </li>
      ))}
    </ul>
  );
}
