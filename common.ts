const PATH = {
  restaurants: 'restaurants',
  orders: 'orders',
} as const;

type PathKeyType = typeof PATH[keyof typeof PATH];

interface Menu {
  id: string;
  name: string;
  price: number;
}

type Menus = Menu[];

interface Restaurants {
  id: string;
  category: string;
  name: string;
  menu: Menus;
}

type RestaurantsType = Restaurants[];

interface Orders {
  id: string;
  menus: Menus;
  totalPrice: number;
}

type OrdersType = Orders[];

type DataType = {
  restaurants: RestaurantsType;
  orders: OrdersType;
}

type ResponseType<T = null> = {
  message: string;
  data: T;
}

export {
  Menu,
  Menus,
  Restaurants,
  RestaurantsType,
  Orders,
  OrdersType,
  DataType,
  PATH,
  PathKeyType,
  ResponseType,
}