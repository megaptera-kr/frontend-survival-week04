import Food from '../types/Food';
import CartButton from './CartButton';

type FoodsProps = {
  foods: Food[];
  button: '추가' | '삭제' | null;
};

function Foods({ foods, button }: FoodsProps) {
  return (
    <ul style={{ listStyle: 'none' }}>
      {foods.map((food: Food, index) => {
        const { name, price } = food;
        return (
          <li key={name}>
            <span>{`${name}(${price.toLocaleString()}원)`}</span>
            {button && <CartButton type={button} food={food} index={index} />}
          </li>
        );
      })}
    </ul>
  );
}

export default Foods;
