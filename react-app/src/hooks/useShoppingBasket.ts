import { useState } from 'react';
import { MenuType } from '../types/restaurants';

export default function useShoppingBasket() {
  const [menuList, setMenuList] = useState<MenuType[]>([]);
  const totalPrice = menuList.reduce((pre, curr) => pre + curr.price, 0);
  const addShoppingList = (menu: MenuType) => {
    setMenuList([...menuList, menu]);
  };
  const reset = () => {
    setMenuList([]);
  };

  const removeMenu = (index: number) => {
    setMenuList(menuList.filter((_, i) => index !== i));
  };
  return {
    menuList,
    totalPrice,
    addShoppingList,
    removeMenu,
    reset,
  };
}
