import Food from './Food';

type Restaurant = {
  id: string;
  category: string;
  name: string;
  menu: Food[];
}

export default Restaurant;
