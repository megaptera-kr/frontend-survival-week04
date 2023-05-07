import MenuItem from '../types/MenuItem';

const calculateTotalPrice = (cartItems: MenuItem[]) => {
  const initPrice = 0;
  return cartItems.reduce((acc, cartItem) => (acc + cartItem.price), initPrice);
};

export default calculateTotalPrice;
