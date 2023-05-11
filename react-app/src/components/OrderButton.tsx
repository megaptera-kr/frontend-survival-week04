import { useLocalStorage } from 'usehooks-ts';
import { Menu, Order, OrderData } from '../types';
import orderInitialValue from '../utils/initialValue';

type Props = {
  menu: Menu[]
  totalPrice: number;
  setCart: (value: React.SetStateAction<Menu[]>) => void;
}
export default function OrderButton({ menu, totalPrice, setCart }:Props) {
  const [, setReceipt] = useLocalStorage<Order>('receipt', orderInitialValue);

  const handleOrders = async () => {
    setCart([]);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ menu, totalPrice }),
    };

    const response = await fetch('http://localhost:3000/orders', requestOptions);
    const data:OrderData = await response.json();
    const { order } = data;

    setReceipt(order);
  };
  return (
    <button
      className="bg-purple-400 p-2 rounded-md
    text-gray-100 hover:bg-purple-500 w-1/2 text-xl mt-8"
      type="button"
      onClick={handleOrders}
    >
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
