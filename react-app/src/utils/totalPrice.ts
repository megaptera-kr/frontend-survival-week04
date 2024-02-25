import Food from '../Types/Food';

export default function totalPrice(choiceFoods :Food[]) : number {
  return choiceFoods.reduce((acc:number, choiceFood:Food) => {
    let sum = acc;
    sum += choiceFood.price;
    return sum;
  }, 0);
}
