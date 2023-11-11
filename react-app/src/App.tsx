import { useLocalStorage, useInterval } from 'usehooks-ts';

import MenuChoose from './components/MenuChoose';
import OrderTable from './components/OrderTable';
import Receipt from './components/Receipt';

import useGetRestaurants from './hooks/useGetRestaurants';

import type { Receipts } from './types/types';

export default function App() {
  const restaurants = useGetRestaurants();
  const initialState = {} as Receipts;

  const [receiptList, setReceiptList] = useLocalStorage('receipt', initialState);

  useInterval(() => {
    if (receiptList.id) {
      setReceiptList(initialState);
    }
  }, receiptList.id ? 5000 : null);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <OrderTable setReceiptList={setReceiptList} />
      <MenuChoose restaurants={restaurants} />
      <Receipt receiptList={receiptList} />
    </div>
  );
}
