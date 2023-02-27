import { useLocalStorage } from 'usehooks-ts';
import Menu from '../types/Menu';

const useHandleClickCancel = () => {
  const [selectedMenus, setMenus] = useLocalStorage<Menu[]>('cart', []);

  const handleClickCancel = (index: number) => {
    const foods = selectedMenus.filter((_, i) => i !== index);
    setMenus(foods);
  };

  return { handleClickCancel };
};

export default useHandleClickCancel;
