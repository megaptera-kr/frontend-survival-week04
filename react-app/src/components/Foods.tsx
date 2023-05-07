import useCart from '../hooks/useCart';
import Food from '../types/Food';

type FoodsProps = {
    menu: Food[],
    buttonType: string;
}

export default function Foods({ menu, buttonType }: FoodsProps) {
  const { addCart, removeCart } = useCart();

  return (
    <>
      {menu.map((food: Food, index: number) => (
        <li key={`${food.name}-${index}`}>
          <span>
            {food.name}
            (
            {food.price.toLocaleString()}
            원)
          </span>
          {buttonType === '선택'
            ? (<button name={`#${food.name}`} type="button" onClick={() => addCart(food)}>선택</button>)
            : (<button type="button" onClick={() => removeCart(index)}>취소</button>) }
        </li>
      ))}
    </>
  );
}
