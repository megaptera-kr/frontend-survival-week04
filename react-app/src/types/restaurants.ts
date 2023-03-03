export type MenuType = {
  id: string;
  name: string;
  price: number;
};

export type RestaurantType = {
  id: string;
  category: string;
  name: string;
  menu: MenuType[];
};

export type MenuCartType = {
  menu: MenuType[];
  totalPrice: number;
};

export type ReceiptType = {
  id: string;
} & MenuCartType;
