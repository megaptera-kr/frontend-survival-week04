import { v4 as uuidv4 } from 'uuid';

import moneyformat from '../utils/common';

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
    <div style={{ marginBottom: '3rem' }}>
      <h2>점심 바구니</h2>
      <ul style={{ width: '20%' }}>
        {cartItems.map((cartItem: CartItemType) => (
          <CartItem
            key={`${uuidv4()}-${cartItem.id}`}
            cartItem={cartItem}
            handleRemoveCartItem={handleRemoveCartItem}
          />
        ))}
      </ul>
      <button
        type='submit'
        onClick={handleClick}
        disabled={cartItems.length < 1}
      >
        합계: {moneyformat(totalPrice)}원 주문
      </button>
    </div>
  );
}

export default Cart;
