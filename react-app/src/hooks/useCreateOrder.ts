import 'whatwg-fetch';
import Food from '../types/Food';
import calculateTotalPrice from '../utils/calculateTotalPrice';

const url = 'http://localhost:3000/orders';

export default async function useCreateOrder(menu : Food[]) {
  const totalPrice = calculateTotalPrice(menu);

  const response = await window.fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ menu, totalPrice }),
  });
  const { receipt } = await response.json();

  return receipt;
}
