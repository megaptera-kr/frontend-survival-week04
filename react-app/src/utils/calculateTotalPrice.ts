import { Menu } from '../types';

export default function calculateTotalPrice(menu: Menu[]):number {
  return menu.reduce((acc, cur) => acc + cur.price, 0);
}
