import Food from '../src/types/Food';

import calculateTotalPrice from '../src/utils/calculateTotalPrice';

const url = 'http://localhost:3000/orders';

export default function useCreateOrder() {
  const createOrder = async (menu: Food[]) => {
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

  return {
    createOrder,
  };
}
