import { FoodMenu } from '../types/kiosk';

export const getTotalPrice = (foods: FoodMenu[]) => foods.reduce(
  (acc, food) => acc + food.price,
  0,
);

export const getTotalPriceStr = (foods: FoodMenu[]) => `${getTotalPrice(foods).toLocaleString()}₩`;
