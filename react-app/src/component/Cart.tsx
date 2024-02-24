import { v4 as uuidv4 } from 'uuid';

import CartItem from './CartItem';

import CartItemType from '../types/CartItemType';

type CartProps = {
  cartItems: CartItemType[];
  handleRemoveCartItem: (item: CartItemType) => void;
  handleOrder: (items: CartItemType[]) => void;
};

function Cart({ cartItems, handleRemoveCartItem, handleOrder }: CartProps) {
  const totalPrice = cartItems.reduce((acc, cur) => acc + cur.price, 0);
  const handleClick = () => {
    handleOrder(cartItems);
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      {cartItems.map((cartItem: CartItemType) => (
        <CartItem
          key={`${uuidv4()}-${cartItem.id}`}
          cartItem={cartItem}
          handleRemoveCartItem={handleRemoveCartItem}
        />
      ))}
      <button type='submit' onClick={handleClick}>
        합계: {totalPrice}원 주문
      </button>
    </div>
  );
}

export default Cart;
