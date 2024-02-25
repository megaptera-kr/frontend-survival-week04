import { RestaurantMenu } from './restaurants';

export type Order = {
  id: string;
  menu: RestaurantMenu[];
  totalPrice: number;
};