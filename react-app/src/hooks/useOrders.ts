import { useMutation } from '@tanstack/react-query';
import { useLocalStorage } from 'usehooks-ts';
import { Menu, OrderItem, RequestOrderBody } from '../types';

export default function useOrders() {
  const [orders, setOrders] = useLocalStorage<OrderItem[]>('orders', []);

  const addOrderItem = (menu: Menu) => {
    const newOrder = {
      ...menu,
      id: new Date().getTime(),
      menuId: menu.id,
    };
    setOrders([...orders, newOrder]);
  };

  const removeOrderItem = (id: number) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const clearOrders = () => {
    setOrders([]);
  };

  const createOrderMutation = useMutation((body: RequestOrderBody) => fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }));

  return {
    orders,
    addOrderItem,
    removeOrderItem,
    createOrderMutation,
    clearOrders,
  };
}
