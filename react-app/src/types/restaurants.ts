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
