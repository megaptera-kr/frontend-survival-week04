import { MenuItem } from './restaurantItemType';

export type ReceiptType = {
  id?: string;
  menu?: MenuItem[];
  totalPrice?: number;
};
