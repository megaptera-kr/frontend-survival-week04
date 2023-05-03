import { useEffect } from 'react';
import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import ReceiptArea from './components/ReceiptArea';
import ShoppingBasket from './components/ShoppingBasket';
import useFetchRestaurants from './hooks/uesFetchRestaurants';
import { ReceiptType } from './types/receipt';

const emptyReceipt = {} as ReceiptType;

export default function App() {
  const { value, setTrue, setFalse } = useBoolean(false);

  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  const restaurants = useFetchRestaurants();

  useEffect(() => {
    setFalse();
    if (receipt.id) {
      setTrue();
    }
  }, [receipt]);

  useInterval(
    () => {
      if (receipt.id) {
        setReceipt(emptyReceipt);
        setFalse();
      }
    },
    value ? 5000 : null,
  );

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <ShoppingBasket setReceipt={setReceipt} />
      <FilterableRestaurantTable restaurants={restaurants} />
      <ReceiptArea receipt={receipt} />
    </>
  );
}
