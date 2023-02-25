import thousandSeparator from '../utils/thousandSeparator';

import Menu from '../types/Menu';

type SelectedMenuProps = {
    menu: Menu;
    index: number;
    selectedMenus: Menu[];
    setSelectedMenus: (menus: Menu[]) => void;
}

export default function SelectedMenu({
  menu, index, selectedMenus, setSelectedMenus,
}: SelectedMenuProps) {
  const handleClick = (i: number) => {
    setSelectedMenus(selectedMenus
      .filter((_, indexOfItem) => indexOfItem !== i));
  };

  return (
    <li>
      {menu.name}
      (
      {thousandSeparator(menu.price)}
      원)
      <button
        type="button"
        onClick={() => handleClick(index)}
      >
        취소
      </button>
    </li>
  );
}
