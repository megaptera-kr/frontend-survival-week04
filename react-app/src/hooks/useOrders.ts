import { useLocalStorage } from 'usehooks-ts';
import { Menu, OrderItem } from '../types';

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

  return {
    orders,
    addOrderItem,
    removeOrderItem,
  };
}
