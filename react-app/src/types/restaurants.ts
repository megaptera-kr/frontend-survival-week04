export interface Menu {
  id: string;
  uniqueId?: string;
  name: string;
  price: number;
}

export interface Restaurant {
  id: string;
  category: string;
  name: string;
  menu: Menu[];
}

export interface RestaurantContextValue {
  restaurants: Restaurant[];
}
