import { useLocalStorage } from 'usehooks-ts';

import CartItemType from '../types/CartItemType';

function useHandleCartItems() {
  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>('cart', []);

  const handleAddCartItem = (cartItem: CartItemType) => {
    setCartItems((prev: CartItemType[]) => [...prev, cartItem]);
  };

  const handleRemoveCartItem = (cartItem: CartItemType) => {
    setCartItems((prev: CartItemType[]) =>
      prev.filter((item) => item !== cartItem),
    );
  };

  const handleRemoveAllCartItem = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    handleAddCartItem,
    handleRemoveCartItem,
    handleRemoveAllCartItem,
  };
}

export default useHandleCartItems;
