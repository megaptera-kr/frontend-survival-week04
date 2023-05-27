import { useInterval, useLocalStorage } from 'usehooks-ts';

import LunchBox from './components/LunchBox';
import MainContainer from './components/MainContainer';
import OrderPrinter from './components/OrderPrinter';

import useFetchData from './hooks/useFetchData';

import ReceiptType from './types/ReceiptType';

const emptyReceipt = {} as ReceiptType;

export default function App() {
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  const restaurants = useFetchData();

  useInterval(() => {
    if (receipt.id) {
      setReceipt(emptyReceipt);
    }
  }, receipt.id ? 5000 : null);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <LunchBox setReceipt={setReceipt} />
      <MainContainer restaurants={restaurants} />
      <OrderPrinter receipt={receipt} />
    </div>

  );
}
