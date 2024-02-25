import { useInterval, useLocalStorage } from 'usehooks-ts';
import { useState } from 'react';
import { RestaurantMenu, Order } from '../types';

const useOrder = () => {
  const [basket, setBasket] = useLocalStorage<RestaurantMenu[]>('basket', []);
  const [isShowReceipt, setIsShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState<Order | null>(null);

  const totalPrice = basket.reduce((acc, { price }) => acc + price, 0);

  useInterval(() => {
    setIsShowReceipt(false);
  }, 5_000);

  const handlePostOrder = async () => {
    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: Date.now().toString(), menu: basket, totalPrice }),
    });

    if (response.ok) {
      setBasket([]);
      setIsShowReceipt(true);
      setReceiptData(await response.json());
    }
  };

  const handleClickMenu = (menu:RestaurantMenu) => {
    setBasket((prev) => [...prev, menu]);
  };

  const handleRemoveMenuFromBasket = (id: string) => {
    setBasket((prev) => prev.filter((m) => m.id !== id));
  };

  return {
    basket,
    handlePostOrder,
    isShowReceipt,
    handleClickMenu,
    handleRemoveMenuFromBasket,
    totalPrice,
    receiptData,
  };
};

export default useOrder;
