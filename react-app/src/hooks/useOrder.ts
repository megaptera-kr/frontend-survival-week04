import { useState } from 'react';

import { useLocalStorage, useInterval } from 'usehooks-ts';

import Food from '../types/Food';

import Receipt from '../types/Receipt';

const useOrder = () => {
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const setCart = useLocalStorage<Food[]>('cart', [])[1];

  const order = async (cart: Food[]) => {
    const url = 'http://localhost:3000/orders';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart }),
    });
    const data = await response.json() as {receipt: Receipt};

    setReceipt(data.receipt);
    setCart([]);
  };

  useInterval(
    () => {
      setReceipt(null);
    },
    receipt ? 5000 : null,
  );

  return { order, receipt };
};

export default useOrder;
