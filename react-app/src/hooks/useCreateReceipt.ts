import { Menu } from '../types/types';

const url = 'http://localhost:3000/order';

export default function useCreateReceipt() {
  const createReceipt = async (menu: Menu[]) => {
    const totalPrice = menu.reduce((acc, cur) => acc + cur.price, 0);

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
