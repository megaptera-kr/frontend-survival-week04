import MenuType from '../types/MenuType';
import totalPriceCalculate from '../utils/totalPriceCalculate';

const url = 'http://localhost:3000/orders';

export default function useCreateOrder() {
  const createOrder = async (menu: MenuType[]) => {
    const totalPrice = totalPriceCalculate(menu);

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
