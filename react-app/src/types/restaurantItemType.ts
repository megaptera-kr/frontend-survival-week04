export type MenuItem = {
  id: string;
  name: string;
  price: number;
};

export type RestaurantItem = {
  id: string;
  category: string;
  name: string;
  menu: MenuItem[];
};

export interface RestaurantsItem {
  restaurants: RestaurantItem[];
}
