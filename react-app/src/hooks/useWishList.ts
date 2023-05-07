import { useLocalStorage } from 'usehooks-ts';
import Menu from '../types/Menu';
import { WishList } from '../types/WishList';

type useWishListReturns = {
  wishList : WishList;
  updateMenuCount: (menu : Menu, isMenuAdded: boolean) => void;
  updateWishList: (newMenuList : Menu[])=> void;
  deleteAllMenuById: (id: string) => void;
  isWishListEmpty: () => boolean;
  clearWishlist: () => void;
}

export default function useWishList():useWishListReturns {
  const defaultWishList: WishList = { id: '', menu: [], totalPrice: 0 };

  const [wishList, setWishList] = useLocalStorage('wishList', defaultWishList);

  const updateWishList = (newMenuList : Menu[]) => {
    if (!newMenuList.length) {
      setWishList(defaultWishList);
      return;
    }

    const totalPrice = newMenuList
      .map((menuItem: Menu) => menuItem.price)
      .reduce((prev, current) => prev + current);

    setWishList({
      id: '',
      menu: newMenuList,
      totalPrice,
    });
  };

  const appendMenu = (newMenu: Menu) => {
    const newMenuList = wishList.menu;
    newMenuList.push(newMenu);
    updateWishList(newMenuList);
  };

  const deleteMenuByIdBackward = (id: string): void => {
    const newMenuList = wishList.menu;
    const deleteId = newMenuList.reduceRight((acc, item, index) => {
      if (item.id === id) {
        return index;
      }
      return acc;
    }, -1);

    if (deleteId >= 0) {
      newMenuList.splice(deleteId, 1);
      updateWishList(newMenuList);
    }
  };

  const deleteAllMenuById = (id : string) => {
    const newMenuList = wishList.menu.filter(
      (menuItem) => (menuItem.id !== id),
    ) || [];
    updateWishList(newMenuList);
  };

  const updateMenuCount = (menu : Menu, isMenuAdded : boolean) => {
    if (isMenuAdded) {
      appendMenu(menu);
    } else {
      deleteMenuByIdBackward(menu.id);
    }
  };

  const isWishListEmpty = () => (
    !(wishList.menu.length && wishList.totalPrice)
  );

  const clearWishlist = () => (
    setWishList(defaultWishList)
  );

  return {
    wishList,
    updateWishList,
    updateMenuCount,
    deleteAllMenuById,
    isWishListEmpty,
    clearWishlist,
  };
}
