interface Restaurant {
    id: string;
    category: string;
    name: string;
    menu: {
      id: string;
      name: string;
      price: number;
    }[]
}

export default Restaurant;
