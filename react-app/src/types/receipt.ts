import { Food } from './Restaurant';

export interface ReceiptType {
  id: string;
  menu: Food[];
  totalPrice: number;
}
