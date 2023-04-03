import { FoodMenu, Receipts } from '../types/kiosk';
import { calcTotalPrice } from '../utils/cart';

interface UseCreateOrder {
  createOrder: (menu: FoodMenu[]) => Promise<Receipts>;
}

const URL = 'http://localhost:3000/orders';

export default function useCreateOrder(): UseCreateOrder {
  const createOrder = async (menu: FoodMenu[]): Promise<Receipts> => {
    const reqData = {
      menu,
      totalPrice: calcTotalPrice(menu),
    };

    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqData),
    });
    const reciepts = await res.json();

    return reciepts;
  };

  return { createOrder };
}
