export interface IRestaurantMenu {
  id: string;
  name: string;
  price: number;
}

export interface IRestaurant {
  id: string;
  category: string;
  name: string;
  menu: IRestaurantMenu[];
}

export interface IPostOrderBody {
  menu: IRestaurantMenu[];
  totalPrice: number;
}

export interface IReceipt {
  id: string;
  menu: IRestaurantMenu[];
  totalPrice: number;
}
