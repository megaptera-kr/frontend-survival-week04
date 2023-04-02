export type Restaurant = {
  id: string;
  category: string;
  name: string;
  menu: {
    id: string;
    name: string;
    price: number;
  }[];
}

export type OrderItem = {
  id: string;
  name: string;
  price: number;
}
