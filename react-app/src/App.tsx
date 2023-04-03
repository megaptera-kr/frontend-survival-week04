import { useEffect } from 'react';
import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';
import FilterSelector from '../components/FilterSelector';
import OrderTable from '../components/OrderTable';
import ReceiptArea from '../components/ReceiptArea';
import fetchRestaurants from '../api/FetchRestaurants';
import Receipt from '../types/Receipt';

const emptyReceipt = {} as Receipt;

export default function App() {
  const restaurants = fetchRestaurants();

  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  const { value, setTrue, setFalse } = useBoolean();

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
      <OrderTable setReceipt={setReceipt} />
      <FilterSelector restaurants={restaurants} />
      <ReceiptArea receipt={receipt} />
    </div>
  );
}
