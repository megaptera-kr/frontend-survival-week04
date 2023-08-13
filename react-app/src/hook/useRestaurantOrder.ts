export default function useRestaurantOrder() {
  const url = 'http://localhost:3000/orders';

  const createOrder = async (menu) => {
    const totalPrice = menu.reduce((acc, cur) => acc + cur.price, 0);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });
    const { order } = await response.json();
    return order;
  };
  return { createOrder };
}
