import { TRestaurantMenu } from './restaurant';

export type TReceipt = {
  id: string,
  menu: TRestaurantMenu[]
  totalPrice: number
}
