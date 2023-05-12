import { useLocalStorage } from 'usehooks-ts';
import Food from '../type/Food';
import calcTotalPrice from '../utils/calcTotalPrice';
import CartItem from './CartItem';
import OrderButton from './OrderButton';

export default function Cart() {
  const [menuCart] = useLocalStorage<Food[]>('cart', []);
  const totalPrice = calcTotalPrice(menuCart);

  return (
    <div>
      <h2>점심 바구니</h2>
      {
        menuCart.map((food, index) => {
          const keyset = `${food.id}//${index}`;
          return (
            <CartItem key={keyset} food={food} index={index} />
          );
        })
      }
      <OrderButton totalPrice={totalPrice} />
    </div>
  );
}
