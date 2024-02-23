import { v4 as uuidv4 } from 'uuid';

import CartItem from './CartItem';

import RestaurantMenu from '../types/RestaurantMenuType';

type CartProps = {
  cartDataLocalStorage: RestaurantMenu[];
  handleUpdateCart: () => void;
};

function Cart({ cartDataLocalStorage, handleUpdateCart }: CartProps) {
  return (
    <div>
      <h2>점심바구니</h2>
      {cartDataLocalStorage.map((cartItem: RestaurantMenu) => (
        <CartItem
          key={`${uuidv4()}-${cartItem.id}`}
          cartItem={cartItem}
          handleUpdateCart={handleUpdateCart}
        />
      ))}
    </div>
  );
}

export default Cart;
