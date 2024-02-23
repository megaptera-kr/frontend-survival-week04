import Food from '../Types/Food';

export default function totalPrice(choiceFoods :Food[]) : number {
  return choiceFoods.reduce((acc:number, choiceFood:Food) => acc += choiceFood.price, 0);
}
