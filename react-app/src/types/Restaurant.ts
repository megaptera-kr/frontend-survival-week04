export interface Food {
  id: string;
  name: string;
  price: number;
}
export interface Restaurant {
  id: string;
  category: string;
  name: string;
  menu: Food[];
}
