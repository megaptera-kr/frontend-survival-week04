import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import FilterableRestaurantsTable from './FilterableRestaurantsTable';
import { TRestaurantsResponse } from '../types/restaurant';
import Cart from './Cart';
import Receipt from './Receipt';
import { TReceipt } from '../types/receipt';

const emptyReceipt = {} as TReceipt;

function FoodKiosk({ restaurants }: { restaurants: TRestaurantsResponse[] }) {
  const { value, setTrue, setFalse } = useBoolean(false);

  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

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
    <div className="food-kiosk">
      <Cart onClickPrinter={(selectedMenu) => setReceipt(selectedMenu)} />
      <FilterableRestaurantsTable restaurants={restaurants} />
      <Receipt receipt={receipt} />
    </div>
  );
}

export default FoodKiosk;
