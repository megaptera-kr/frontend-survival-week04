import type { Menu } from '../types/types';

export default function calculateTotalPrice(menu: Menu[]) {
  return menu.reduce((acc, cur) => acc + cur.price, 0);
}
