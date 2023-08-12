import { useLocalStorage } from 'usehooks-ts';
import { ShoppingCart } from '../types/restaurants';

export default function useAddProductToCart() {
  const [cart, setCart] = useLocalStorage<ShoppingCart>('shoppingCart', { menu: [], totalPrice: 0 });

  return { cart, setCart };
}
