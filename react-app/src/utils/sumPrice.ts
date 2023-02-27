import Food from '../types/Food';

const sumPrice = (foods: Food[]) => foods.reduce((acc: number, food) => acc + food.price, 0);

export default sumPrice;
