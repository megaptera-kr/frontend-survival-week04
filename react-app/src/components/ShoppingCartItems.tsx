import { v4 as uuidv4 } from 'uuid';
import CartItem from './CartItem';

import MenuItem from '../types/MenuItem';

type ShoppingCartItemsProps = {
    cartItems: MenuItem[];
    setCartItems: React.Dispatch<React.SetStateAction<MenuItem[]>>
}

export default function ShoppingCartItems({
  cartItems,
  setCartItems,
}: ShoppingCartItemsProps) {
  return (
    <ul className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem
          key={uuidv4()}
          cartItem={cartItem}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </ul>
  );
}
