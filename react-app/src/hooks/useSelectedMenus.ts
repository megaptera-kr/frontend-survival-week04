import { useLocalStorage, useMap, useTimeout } from 'usehooks-ts';

import { useEffect, useMemo, useState } from 'react';
import { MenuItem } from '../types/restaurantItemType';
import { ReceiptType } from '../types/receiptType';

export default function useSelectedMenus() {
  const [addedMenus, setAddMenu] = useLocalStorage<MenuItem[]>('cart', []);
  const [receipt, setReceipt] = useLocalStorage<ReceiptType>('receipt', {});

  const price = useMemo(
    () => addedMenus.reduce((acc, cur) => acc + (cur.price || 0), 0),
    [addedMenus]
  );

  const handleAdd = (item: MenuItem) => {
    setAddMenu((prev) => [...prev, item]);
  };

  const handleDelete = (idx: number) => {
    setAddMenu((prev) => prev.filter((_, index) => index !== idx));
  };

  const handleOrders = async () => {
    if (addedMenus.length > 0) {
      const item = {
        id: '12345678',
        menu: addedMenus,
        price,
      };

      const response = await fetch('http://localhost:3000/orders', {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        method: 'post',
        body: JSON.stringify(item),
      });
      const data = (await response.json()) as ReceiptType;

      setReceipt(data);

      setAddMenu([]);
    }
  };

  return {
    addedMenus,
    price,
    receipt,
    handleAdd,
    handleDelete,
    handleOrders,
  };
}
