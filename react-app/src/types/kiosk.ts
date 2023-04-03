export interface FoodMenu {
  id: string;
  name: string;
  price: number;
}

export interface Restaurant {
  id: string;
  category: string;
  name: string;
  menu: FoodMenu[];
}

export interface KioskFilter {
  searchText: string;
  category :string;
}

export interface Receipts {
  id: string;
  menu: FoodMenu[];
  totalPrice: number;
}
