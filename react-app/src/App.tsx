import { useEffect } from 'react';
import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import OrderList from './components/OrderTable';
import ReceiptPrinter from './components/ReceiptPrinter';
import useFetchRestaurants from './hooks/UseFetchRestaurants';
import Receipt from './types/Receipt';

const emptyReceipt = {} as Receipt;

export default function App() {
  const restaurants = useFetchRestaurants();

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
      <OrderList setReceipt={setReceipt} />
      <FilterableRestaurantTable restaurants={restaurants} />
      <ReceiptPrinter receipt={receipt} />
    </div>
  );
}
