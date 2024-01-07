import { useState } from 'react';

import FilterableRestaurantTable from './FilterableRestaurantTable';
import ReceiptExit from './ReceiptExit';
import OrderCart from './OrderCart';

import { MenuItem } from '../types/MenuItem';
import { Receipt } from '../types/Receipt';

export default function Kiosk() {
  const [orders, setOrders] = useState<MenuItem[]>([]);
  const [receipt, setReceipt] = useState<Receipt>({
    id: '',
    totalPrice: 0,
    menu: [],
  });

  const handleSelectMenu = (menu: MenuItem) => {
    const newOrder = {
      id: Date.now().toString(),
      name: menu.name,
      price: menu.price,
    };
    setOrders((order) => [...order, newOrder]);
  };

  const totalPrice: number = orders?.reduce(
    (acc: number, order) => acc + order.price,
    0,
  );

  return (
    <div>
      <OrderCart
        orders={orders}
        setOrders={setOrders}
        totalPrice={totalPrice}
        setReceipt={setReceipt}
      />
      <FilterableRestaurantTable handleSelectMenu={handleSelectMenu} />
      <ReceiptExit receipt={receipt} />
    </div>
  );
}
