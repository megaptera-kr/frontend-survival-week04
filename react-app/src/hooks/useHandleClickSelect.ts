import { useLocalStorage } from 'usehooks-ts';

import Menu from '../types/Menu';

const useHandleClickSelect = () => {
  const [selectedMenus, selectMenu] = useLocalStorage<Menu[]>('cart', []);

  const handleClickSelect = (menu:Menu) => {
    selectMenu([
      ...selectedMenus,
      menu,
    ]);
  };

  return { handleClickSelect };
};

export default useHandleClickSelect;
