import Food from '../type/Food';

export default function calcTotalPrice(menuCart: Food[]) {
  return (
    menuCart.reduce((acc:number, cur:Food):number => (
      acc + cur.price
    ), 0)
  );
}
