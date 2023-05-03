import { useEffect } from 'react';
import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import Receipt from '../types/Receipt';

import Cart from './Cart';
import FilterableRestaurantTable from './FilterableRestaurantTable';
import ReceiptPrinter from './ReceiptPrinter';

const emptyReceipt = {} as Receipt;

export default function FoodCourtKiosk() {
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
    value ? 5000 : null
  );

  return (
    <>
      <Cart setReceipt={setReceipt} />
      <FilterableRestaurantTable restaurants={restaurants} />
      <ReceiptPrinter receipt={receipt} />
    </>
  );
}
