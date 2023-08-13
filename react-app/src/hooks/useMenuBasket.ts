import { useLocalStorage } from 'usehooks-ts';

import { IRestaurantMenu } from '../types/restaurants';

export default function useMenuBasket() {
  const [basket, setBasket] = useLocalStorage<IRestaurantMenu[]>('basket', []);
  const totalPrice = basket.reduce((acc, cur) => acc + cur.price, 0);

  const addMenu = (menu: IRestaurantMenu) => {
    const newBasket = [...basket, menu];
    setBasket(newBasket);
  };

  const removeMenu = (menuIndex: number) => {
    const newBasket = basket.filter((_, index) => index !== menuIndex);
    setBasket(newBasket);
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return {
    basket,
    totalPrice,
    addMenu,
    removeMenu,
    clearBasket,
  };
}
