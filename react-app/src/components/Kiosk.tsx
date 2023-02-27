import { useLocalStorage } from 'usehooks-ts';

import FilterableRestaurantTable from './FilterableRestaurantTable';
import OrderSheet from './OrderSheet';
import Receipt from './Receipt';

import Restaurant from '../types/Restaurants';
import Menu from '../types/Menu';
import ReceiptData from '../types/ReceiptData';

type KioskProps = {
    restaurants: Restaurant[];
}

export default function Kiosk({ restaurants } : KioskProps) {
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);
  const [receiptData, setReceiptData] = useLocalStorage<ReceiptData | null>('receipt', null);
  return (
    <>
      <OrderSheet
        cart={cart}
        setCart={setCart}
        setReceiptData={setReceiptData}
      />
      <FilterableRestaurantTable
        restaurants={restaurants}
        cart={cart}
        setCart={setCart}
      />
      <Receipt
        receiptData={receiptData}
        setReceiptData={setReceiptData}
      />
    </>
  );
}
