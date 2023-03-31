import { useState, useCallback } from 'react';

import useTimeout from './useTimeout';
import { FoodMenu, Receipts } from '../types/kiosk';
import { getTotalPrice } from '../utils/cart';

interface UseOrder {
  receipts: Receipts | null;
  handleOrderCart: () => void;
}

export default function useOrder(cartItems: FoodMenu[]): UseOrder {
  const [receipts, setReceipts] = useState<Receipts | null>(null);

  const handleOrderCart = async () => {
    if (!cartItems.length) return;

    const reqData = {
      menu: cartItems,
      totalPrice: getTotalPrice(cartItems),
    };

    const res = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqData),
    });
    const data = await res.json();
    setReceipts(data);
  };

  const clearReceipts = useCallback(() => {
    setReceipts(null);
  }, []);

  useTimeout(clearReceipts, 5000, receipts);

  return { receipts, handleOrderCart };
}
