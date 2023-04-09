import { useEffect } from 'react';
import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';

import Cart from './components/Cart';

import Receipt from './types/Receipt';

import useFetchRestaurants from './hooks/useFetchRestaurants';
import FilteredRestaurantTable from './components/FilteredRestaurantTable';
import ReceiptPrinter from './components/ReceiptPrinter';

const emptyReceipt = {} as Receipt;

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

  useInterval(() => {
    if (receipt.id) {
      setReceipt(emptyReceipt);
      setFalse();
    }
  }, value ? 5000 : null);

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      {/* 장바구니 */}
      <Cart setReceipt={setReceipt} />
      {/* 키오스크 (식당/메뉴) */}
      <FilteredRestaurantTable restaurants={restaurants} />
      {/* 영수증 */}
      <ReceiptPrinter receipt={receipt} />
    </>
  );
}
