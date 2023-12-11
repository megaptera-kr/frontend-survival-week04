import Menu from '../types/Menu';
import Order from '../types/Order';

export default function makeOrder(orderMenu : Menu[]):Order {
  let totalPrice = 0;
  orderMenu.forEach((menu) => {
    totalPrice += menu.price;
  });

  return { menu: orderMenu, totalPrice };
}
