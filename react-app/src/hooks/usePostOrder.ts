import { Order } from '../types/Order';

const usePostOrder = () => {
  const postOrder = async (order: Order) => {
    const res = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        menu: order.menu,
        totalPrice: order.menu.reduce((acc, m) => m.price + acc, 0),
      }),
    });
    const { receipt } = await res.json();
    return receipt;
  };
  return { postOrder };
};

export default usePostOrder;
