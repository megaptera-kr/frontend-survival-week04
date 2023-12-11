import { useInterval, useLocalStorage } from 'usehooks-ts';
import Menu from '../types/Menu';
import Order from '../types/Order';
import CartItem from './CartItem';
import Receipt from '../types/Receipt';
import useCreateReceipt from '../hooks/useCreateReceipt';

type CartProps = {
  order: Order
  cart: Menu[]
  setCart: (value: Menu[]) => void
}
const emptyReceipt = {} as Receipt;

export default function Cart({
  order,
  cart,
  setCart,
}:CartProps) {
  const handleClickCancel = (index: number) => {
    const foods = cart.filter((_, i) => i !== index);
    setCart(foods);
  };

  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', emptyReceipt);

  const { createReceipt } = useCreateReceipt();

  const handleClickOrder = async () => {
    const result = await createReceipt(order);
    setReceipt(result);

    setCart([]);
  };

  useInterval(() => {
    if (receipt.id) {
      setReceipt(emptyReceipt);
    }
  }, receipt.id ? 5000 : null);

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>점심 바구니</h2>
      <ul style={{ width: '20%' }}>
        {order.menu.map((item, index) => {
          const key = `${item.id}-${index}`;
          return (
            <CartItem
              key={key}
              menu={item}
              index={index}
              onClickCancel={handleClickCancel}
            />
          );
        })}
      </ul>
      <button
        type="button"
        onClick={handleClickOrder}
      >
        합계:
        {' '}
        {order.totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}
