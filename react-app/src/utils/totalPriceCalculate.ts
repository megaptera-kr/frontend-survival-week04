import MenuType from '../types/MenuType';

export default function totalPrice(lunch: MenuType[]) {
  return lunch.reduce((acc, cur) => acc + cur.price, 0);
}
