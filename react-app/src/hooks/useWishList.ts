import { useEffectOnce, useFetch, useLocalStorage } from 'usehooks-ts';
import Menu from '../types/Menu';
import { WishList } from '../types/WishList';

type FetchOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  mode : 'cors' | 'no-cors' | 'cors' |'same-origin';
  headers: {
    'Content-Type': 'application/json'| 'application/x-www-form-urlencoded'
  };
  body: string;
}

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
  // const url = 'http//localhost:3000/orders';
  // const options: FetchOptions = {
  //   method: 'POST',
  //   mode: 'cors',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(wishList),
  // };
  // const fetchOrderReceipt = async () => {
  //   console.log('shival');
  //   const { data } = await useFetch(url, options);
  //   console.log(data);
  // };
  // useEffectOnce(() => {
  //   fetchOrderReceipt();
  // });

  return {
    wishList,
    updateWishList,
    updateMenuCount,
    deleteAllMenuById,
    isWishListEmpty,
    clearWishlist,
  };
}
