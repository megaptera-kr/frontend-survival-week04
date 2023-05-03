import Food from '../types/Food';

export default function caculateTotalPrice(menu: Food[]) {
  return menu.reduce((acc, cur) => acc + cur.price, 0);
}
