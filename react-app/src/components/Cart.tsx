import CartHeader from './CartHeader';
import CartTable from './CartTable';
import type { FoodMenu } from '../types/kiosk';

interface CartProps {
  cartItems: FoodMenu[];
  clearCart: () => void;
  orderCart: () => void;
}

export default function Cart({ cartItems, clearCart, orderCart }: CartProps) {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
      <h2>점심 바구니</h2>
      <CartHeader cartItems={cartItems} clearCart={clearCart} orderCart={orderCart} />
      <CartTable cartItems={cartItems} />
    </article>
  );
}
