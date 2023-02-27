import { TRestaurantMenu } from '../types/restaurant';

const url = 'http://localhost:3000/orders';

const useFetchOrders = () => {
  const fetchOrder = async (menu: TRestaurantMenu[], totalPrice: number) => {
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

  return { fetchOrder };
};

export default useFetchOrders;
