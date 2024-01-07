import { Order } from './Order';

export type Receipt = {
  id: string;
} & Order;
