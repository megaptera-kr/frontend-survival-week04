import { FoodMenu } from '../types/kiosk';

export const calcTotalPrice = (foods: FoodMenu[]) => foods.reduce(
  (acc, food) => acc + food.price,
  0,
);

export const getTotalPriceWithUnit = (foods: FoodMenu[], unit = '') => `${calcTotalPrice(foods).toLocaleString()}${unit}`;
