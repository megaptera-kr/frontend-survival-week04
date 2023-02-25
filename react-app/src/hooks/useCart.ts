import { useLocalStorage } from 'usehooks-ts';

import Food from '../types/Food';

const useCart = () => {
  const [cart, setCart] = useLocalStorage<Food[]>('cart', []);

  const addCart = (food: Food) => {
    setCart((prev) => [...prev, food]);
  };

  const removeCart = (index:number) => {
    setCart((prev) => prev.filter((food, idx) => idx !== index));
  };

  return {
    cart, addCart, removeCart,
  };
};

export default useCart;
