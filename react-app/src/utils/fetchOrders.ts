import { OrderBody } from '../types/Order';

const fetchOrders = async ({ menu, totalPrice }: OrderBody) => {
  const url = 'http://localhost:3000/orders';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ menu, totalPrice }),
  });
  const data = await response.json();
  return data;
};

export default fetchOrders;
