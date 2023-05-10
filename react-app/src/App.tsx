import { useInterval, useLocalStorage } from 'usehooks-ts';

import Cart from './components/Cart';
import FilterableTable from './components/FilterableTable';
import ReceiptPrinter from './components/ReceiptPrinter';

import Receipt from './types/Receipt';

const emptyReceipt = {} as Receipt;

export default function App() {
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  useInterval(() => {
    setReceipt(emptyReceipt);
  }, receipt.id ? 5000 : null);

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilterableTable />
      <ReceiptPrinter receipt={receipt} />
    </>
  );
}
