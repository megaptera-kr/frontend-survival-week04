import { useLocalStorage } from 'usehooks-ts';
import Receipt from '../../../types/Receipt';

const RECEIPT_STORAGE_KEY = 'receipt-key';

export default function useReceipt() {
  const [receipt, setReceipt] = useLocalStorage<Receipt>(RECEIPT_STORAGE_KEY, { id: '', menu: [], totalPrice: 0 });

  return { receipt, setReceipt };
}
