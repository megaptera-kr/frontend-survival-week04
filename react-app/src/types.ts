interface Menu {
  id: string;
  name: string;
  price: number;
}

export type Restaurant = {
  id: string;
  category: string;
  name: string;
  menu: Menu[];
};

export type CategoryGroupProps = {
  categories: string[];
  setCategory: (category: string) => void;
};
