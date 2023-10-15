import { useEffect, useState } from 'react';
import Menu from '../types/Menu';

export default function useTotalPrice(itemList?: Menu[]) {
  if (!itemList) {
    return 0;
  }

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const price = itemList?.reduce((acc: number, item) => acc + item.price, 0);

    setTotalPrice(price || 0);
  }, [itemList]);

  return totalPrice;
}
