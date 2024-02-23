import { v4 as uuidv4 } from 'uuid';

import CartItem from './CartItem';

import CartItemType from '../types/CartItemType';

type CartProps = {
  cartItems: CartItemType[];
  handleRemoveCartItem: (item: CartItemType) => void;
};

function Cart({ cartItems, handleRemoveCartItem }: CartProps) {
  return (
    <div>
      <h2>점심바구니</h2>
      {cartItems.map((cartItem: CartItemType) => (
        <CartItem
          key={`${uuidv4()}-${cartItem.id}`}
          cartItem={cartItem}
          handleRemoveCartItem={handleRemoveCartItem}
        />
      ))}
    </div>
  );
}

export default Cart;
