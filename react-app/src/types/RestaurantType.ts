import Food from './Food';

interface RestaurantType {
  id: string;
  category: string;
  name: string;
  menu: Food[];
}

export default RestaurantType;
