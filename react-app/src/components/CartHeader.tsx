import { FoodMenu } from '../types/kiosk';
import { getTotalPrice, getTotalPriceStr } from '../utils/cart';

interface CartHeaderProps {
  cartItems: FoodMenu[];
  orderCart: () => void;
  clearCart: () => void;
}

export default function CartHeader({ cartItems, orderCart, clearCart }: CartHeaderProps) {
  return (
    <header>
      <dl style={{ display: 'flex' }}>
        <dt>총 주문 금액</dt>
        <dd>{getTotalPriceStr(cartItems)}</dd>
      </dl>
      <div style={{ display: 'flex', columnGap: '4px' }}>
        <button type="button" style={{ width: '100%', backgroundColor: 'gray', color: 'white' }} onClick={clearCart}>취소하기</button>
        <button type="button" style={{ width: '100%', backgroundColor: 'blue', color: 'white' }} aria-label="주문하기" onClick={orderCart}>{`합계: ${getTotalPrice(cartItems).toLocaleString()}원 주문`}</button>
      </div>
    </header>
  );
}
