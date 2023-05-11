import { Menu } from './restaurants';

export interface Cart {
  id?: number;
  menu: Menu[];
  totalPrice: number;
}
