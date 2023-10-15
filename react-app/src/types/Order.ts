import Menu from './Menu';

export interface OrderBody {
  menu: Menu[]
  totalPrice: string
}

export interface OrderType extends OrderBody {
  id: string
}
