import { Menu } from '../types/types';
import calculateTotalPrice from '../utils/calculateTotalPrice';

const url = 'http://localhost:3000/order';

export default function useCreateReceipt() {
  const createReceipt = async (menu: Menu[]) => {
    const totalPrice = calculateTotalPrice(menu);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const { receipt } = await response.json();

    return receipt;
  };
  return createReceipt;
}
