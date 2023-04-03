import CartHeader from './CartHeader';
import CartTable from './CartTable';
import useCart from '../hooks/useCart';
import useCreateOrder from '../hooks/useCreateOrder';
import { Receipts } from '../types/kiosk';

interface CartProps {
  createReceipts: (reciepts: Receipts) => void;
}

export default function Cart({ createReceipts }: CartProps) {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const { createOrder } = useCreateOrder();

  const handleClickOrder = async () => {
    if (!cartItems.length) return;

    const reciepts = await createOrder(cartItems);
    createReceipts(reciepts);
    clearCart();
  };

  return (
    <article style={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
      <h2>점심 바구니</h2>
      <CartHeader cartItems={cartItems} clearCart={clearCart} orderCart={handleClickOrder} />
      <CartTable cartItems={cartItems} removeFromCart={removeFromCart} />
    </article>
  );
}
