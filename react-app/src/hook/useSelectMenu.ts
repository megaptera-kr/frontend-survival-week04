import { useLocalStorage } from 'usehooks-ts';

export default function useSelectMenu() {
  const [selectMenu, setSelectMenu] = useLocalStorage('selectMenu', []);

  const handleSelectMenu = (menu) => {
    setSelectMenu([...selectMenu, menu]);
  };

  const handleRemoveSelectMenu = (index:number) => {
    const menu = selectMenu.filter((_, i) => i !== index);
    setSelectMenu(menu);
  };

  return {
    selectMenu, setSelectMenu, handleSelectMenu, handleRemoveSelectMenu,
  };
}
