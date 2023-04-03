import { Food } from '../types/Restaurant';
import calculateTotalPrice from '../utils/calculateTotalPrice';

const URL = 'http://localhost:3000/orders';

export default function useCreateOrder() {
  const createOrder = async (menu: Food[]) => {
    const totalPrice = calculateTotalPrice(menu);
    const res = await fetch(URL, {
      method: 'post',
      body: JSON.stringify({ menu, totalPrice }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { receipt } = await res.json();
    return receipt;
  };

  return createOrder;
}
