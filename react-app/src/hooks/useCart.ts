import { useLocalStorage } from 'usehooks-ts';
import Food from '../types/Food';

export default function useCart() {
  const [cart, setCart] = useLocalStorage<Food[]>('cart', []);

  const addCart = (food: Food) => {
    setCart((prev) => [...prev, food]);
  };

  const removeCart = (index) => {
    setCart((prev) => prev.filter((menu, idx) => idx !== index));
  };

  return { cart, addCart, removeCart };
}
