export type Menu = {
  id: string;
  name: string;
  price: number
}

export type Restaurants = {
  id: string;
  category: string;
  name: string;
  menu: Menu[]
}

export type Receipts = {
  id: string;
  menu: Menu[];
  totalPrice: number;
}
