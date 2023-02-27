import { Menu } from './Restaurant';

export type Receipt = {
  id: string;
  menu: Menu[]
  totalPrice: number;
};

export default Receipt;
