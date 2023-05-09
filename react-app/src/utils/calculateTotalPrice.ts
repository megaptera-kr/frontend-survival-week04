import Food from '../types/Food';

export default function calculateTotalPrice(menu: Food[]) {
  return menu.reduce((sum, food) => sum + food.price, 0);
}
