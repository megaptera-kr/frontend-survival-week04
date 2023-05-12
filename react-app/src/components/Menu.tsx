import { useLocalStorage } from 'usehooks-ts';
import Food from '../type/Food';

type MenuProps={
  food:Food
}

export default function Menu({ food }:MenuProps) {
  const [menuCart, setMenuCart] = useLocalStorage<Food[]>('cart', []);
  function handleCart() {
    setMenuCart([...menuCart, food]);
  }
  return (
    <ol>
      <ul>
        <span>
          {food.name}
          (
          {food.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원)
          <button name={`#${food.name}`} type="button" onClick={handleCart}>선택</button>
        </span>
      </ul>
    </ol>
  );
}
