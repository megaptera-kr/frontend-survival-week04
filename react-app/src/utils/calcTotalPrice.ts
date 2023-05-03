import Menu from '../types/Menu';

const calcTotalPrice = (cartItems: Menu[]) => (
  cartItems.reduce((acc, cur) => acc + cur.price, 0)
);

export default calcTotalPrice;
