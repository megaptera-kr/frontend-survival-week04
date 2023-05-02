import { useLocalStorage } from 'usehooks-ts';
import Cart from './Cart';
import { Menu } from '../types';
import calculateTotalPrice from '../utils/calculateTotalPrice';
import OrderButton from './OrderButton';

export default function LunchCart() {
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);
  const totalPrice = calculateTotalPrice(cart);
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="font-bold text-2xl mb-8">점심 바구니</h2>
      <Cart cart={cart} setCart={setCart} />
      <OrderButton totalPrice={totalPrice} menu={cart} setCart={setCart} />
    </div>
  );
}
