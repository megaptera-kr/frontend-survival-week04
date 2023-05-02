type Category = '한식' | '중식' | '일식';

export type Menu = {
  id: string;
  name: string;
  price: number;
}

export type MenuContext = {
  menu: Menu[];
  setMenu: (menu: Menu[]) => void;
};

export type Restaurant = {
  id: string;
  category: Category;
  name: string;
  menu: Menu[];
}

export type Data = {
  restaurants: Restaurant[];
}

export type FilterTextState = {
  filterText: string;
  setFilterText: (value: string) => void;
};

export type Order = {
  id: string;
  menu: Menu[];
  totalPrice: number;
}

export type OrderData = {
  order: Order;
}
