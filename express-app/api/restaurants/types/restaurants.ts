interface Menu {
  id: string;
  name: string;
  price: number;
}

interface Restaurants {
  id: string;
  category: string;
  name: string;
  menu: Menu[];
}

export default Restaurants;
