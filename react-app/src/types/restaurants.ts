export type Menu = {
  id: string;
  name: string;
  price: number;
};

export type Restaurant = {
  id: string;
  category: string;
  name: string;
  menu: Menu[];
}

export type RestaurantFilterConditions = {
  query: string;
  foodType: string;
}

export interface ShoppingCart {
  menu: Menu[];
  totalPrice: number;
}

export interface ResOrders {
  id: string;
  menu: Menu[];
  totalPrice: number;
}
