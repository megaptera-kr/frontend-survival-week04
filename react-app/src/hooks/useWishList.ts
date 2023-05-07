import { useLocalStorage } from 'usehooks-ts';
import Menu from '../types/Menu';
import { WishList } from '../types/WishList';

export default function useWishList():[
  WishList,
  (item : Menu)=>void,
  ] {
  const defaultWishList: WishList = { menu: [], totalPrice: 0 };

  const [wishList, setWishList] = useLocalStorage('wishList', defaultWishList);

  function updateWishList(newMenu: Menu) {
    const { menu } = wishList;
    menu.push(newMenu);
    const totalPrice = menu
      .map((menuItem: Menu) => menuItem.price)
      .reduce((prev, current) => prev + current);

    setWishList({
      menu,
      totalPrice,
    });
  }

  return [wishList, updateWishList];
}
