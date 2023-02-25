import { useInterval, useLocalStorage } from 'usehooks-ts';

import Receipt from '../types/Receipt';
import ReceiptPaper from './ReceiptPaper';

export default function ReceiptBox() {
  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', {
    orders: [],
    totalPrice: 0,
    receiptNo: '',
  });

  useInterval(
    () => {
      setReceipt({
        orders: [],
        totalPrice: 0,
        receiptNo: '',
      });
    },
    receipt.receiptNo ? 5_000 : null,
  );

  return (
    <div>
      {
        receipt.receiptNo
          ? <ReceiptPaper receipt={receipt} />
          : <div>영수증 나오는 곳</div>
      }
    </div>
  );
}
