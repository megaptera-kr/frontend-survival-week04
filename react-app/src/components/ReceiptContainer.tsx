import { useInterval, useLocalStorage } from 'usehooks-ts';
import orderInitialValue from '../utils/initialValue';
import { Order } from '../types';
import Receipt from './Receipt';

export default function ReceiptContainer() {
  const [receipt, setReceipt] = useLocalStorage<Order>('receipt', orderInitialValue);

  useInterval(
    () => {
      setReceipt(orderInitialValue);
    },
    receipt.id.length > 0 ? 5000 : null,
  );
  return receipt.id.length <= 0 ? (
    <div className="w-full flex justify-center mt-6
    font-bold text-3xl text-purple-600"
    >
      [영수증 나오는 곳]
    </div>
  ) : (
    <Receipt receipt={receipt} />
  );
}
