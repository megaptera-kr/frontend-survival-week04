import { Food } from '../types/Restaurant';

export default function calculateTotalPrice(foods: Food[]) {
  return foods.reduce((acc, curr) => acc + curr.price, 0);
}
