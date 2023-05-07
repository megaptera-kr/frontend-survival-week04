import MenuItem from '../types/MenuItem';

type requestPostOrdersProps = (
  cartItems: MenuItem[], totalPrice: number
) => Promise<any>

const requestPostOrders: requestPostOrdersProps = (
  cartItems,
  totalPrice,
) => {
  const requestData = {
    menu: cartItems,
    totalPrice,
  };

  const url = 'http://localhost:3000/orders';
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw error;
    });
};

export default requestPostOrders;
