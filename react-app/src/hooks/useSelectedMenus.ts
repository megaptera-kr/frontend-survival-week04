import { useMemo } from 'react';

import { useLocalStorage } from 'usehooks-ts';

import { MenuItem } from '../types/restaurantItemType';

import { ReceiptResponse, ReceiptType } from '../types/receiptType';

import { postOrderAPI } from '../constants/apis';

export default function useSelectedMenus() {
  const [addedMenus, setAddMenu] = useLocalStorage<MenuItem[]>('cart', []);
  const [receipt, setReceipt] = useLocalStorage<ReceiptType>('receipt', {});

  const totalPrice = useMemo(
    () => addedMenus.reduce((acc, cur) => acc + (cur.price || 0), 0),
    [addedMenus],
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
        totalPrice,
      };

      const response = await fetch(postOrderAPI, {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        method: 'post',
        body: JSON.stringify(item),
      });
      const data = (await response.json()) as ReceiptResponse;

      const { receipt: receiptData } = data;

      setReceipt(receiptData);

      setTimeout(() => setReceipt({}), 5000);

      setAddMenu([]);
    }
  };

  return {
    addedMenus,
    totalPrice,
    receipt,
    handleAdd,
    handleDelete,
    handleOrders,
  };
}
