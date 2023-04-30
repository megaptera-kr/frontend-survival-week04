import { useLocalStorage } from 'usehooks-ts';

import Menu from '../types/Menu';
import Receipt from '../types/Receipt';

import useCreateOrder from '../hooks/useCreateOrder';

import calcTotalPrice from '../utils/calcTotalPrice';

interface OrderButtonProps{
  setReceipt: React.Dispatch<React.SetStateAction<Receipt | undefined>>
}

function OrderButton({
  setReceipt,
}: OrderButtonProps) {
  const [cartItems, setCartItems] = useLocalStorage<Menu[]>('cart', []);

  const createOrder = useCreateOrder();

  const handleClickOrder = async () => {
    if (!cartItems.length) return;

    const receipt = await createOrder(cartItems);
    setReceipt(receipt);
    setCartItems([]);
  };

  return (
    <button
      type="button"
      onClick={handleClickOrder}
    >
      합계:
      {' '}
      {calcTotalPrice(cartItems).toLocaleString()}
      원 주문
    </button>
  );
}
export default OrderButton;
