const HOST = `http://localhost:3001`;


const PATH = {
  restaurants: 'restaurants',
  orders: 'orders',
} as const;

const ROUTES = {
  [PATH.restaurants]: `/${PATH.restaurants}`,
  [PATH.orders]: `/${PATH.orders}`,
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
  status: StatusCodeType;
}

const StatusCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
} as const;

type StatusCodeType = typeof StatusCode[keyof typeof StatusCode];

export {
  Menu,
  Menus,
  Restaurants,
  RestaurantsType,
  Orders,
  OrdersType,
  DataType, 
  PathKeyType,
  ResponseType,
  PATH,
  ROUTES,
  HOST,
  StatusCode,
  StatusCodeType,
}