import Order from '../types/Order';

const url = 'http://localhost:3000/orders';

export default function useCreateReceipt() {
  const createReceipt = async (order: Order) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...order }),
    });

    const { result } = await response.json();

    return result;
  };

  return {
    createReceipt,
  };
}
