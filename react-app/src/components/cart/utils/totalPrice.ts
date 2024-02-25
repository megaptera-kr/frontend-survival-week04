import Menu from '../../../types/Menu';

export default function getTotalPrice(menus: Menu[]) {
  return menus.reduce((acc, menu) => acc + menu.price, 0).toLocaleString();
}
