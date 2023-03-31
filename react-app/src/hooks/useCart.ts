import { useLocalStorage } from 'usehooks-ts';

import { FoodMenu } from '../types/kiosk';
import { alreadyHasItem } from '../utils/common';

interface UseCart {
  cartItems: FoodMenu[];
  addToCart: (food: FoodMenu) => () => void;
  clearCart: () => void;
}

export default function useCart(): UseCart {
  const [cartItems, setCartitems] = useLocalStorage<FoodMenu[]>('cart', []);

  const addToCart = (food: FoodMenu) => () => {
    if (alreadyHasItem(cartItems, (cart) => cart.id === food.id)) return;

    setCartitems((prev) => [...prev, food]);
  };

  const clearCart = () => {
    setCartitems([]);
  };

  return { cartItems, addToCart, clearCart };
}
