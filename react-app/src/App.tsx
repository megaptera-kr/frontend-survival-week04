import { useEffect } from 'react';
import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';
import Receipts from './components/Receipt';
import Receipt from './types/Receipt';
import Cart from './components/Cart';
import TotalTable from './components/TotalTable';
import useFetchRestaurants from './hooks/useFetchRestaurants';

const emptyReceipt = {} as Receipt;

export default function App() {
  const restaurants = useFetchRestaurants();
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);
  const { value, setTrue, setFalse } = useBoolean(false);

  useEffect(() => {
    setFalse();

    if (receipt.id) {
      setTrue();
    }
  }, [receipt]);

  useInterval(() => {
    if (receipt.id) {
      setReceipt(emptyReceipt);
      setFalse();
    }
  }, value ? 5000 : null);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <TotalTable restaurants={restaurants} />
      <Receipts receipt={receipt} />
    </div>
  );
}
