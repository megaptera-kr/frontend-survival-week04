import Food from '../Types/Food';

type FoodsProps = {
  menu: Food[];
  setChoiceFoods: (food: Food) => void;
};

export default function Foods({ menu, setChoiceFoods }: FoodsProps) {
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
          <button type="button" onClick={() => setChoiceFoods({ ...it })}>
            선택
          </button>
        </li>
      ))}
    </ul>
  );
}
