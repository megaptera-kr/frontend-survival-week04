import CartItems from './CartItems';
import OrderButton from './OrderButton';

import Receipt from '../types/Receipt';

interface CartProps{
  setReceipt: React.Dispatch<React.SetStateAction<Receipt | undefined>>
}

function Cart({ setReceipt } : CartProps) {
  return (
    <div style={{ paddingBottom: '40px' }}>
      <h2>점심 바구니</h2>
      <CartItems />
      <OrderButton setReceipt={setReceipt} />
    </div>
  );
}

export default Cart;
