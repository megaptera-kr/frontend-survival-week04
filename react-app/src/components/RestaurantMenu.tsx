import { MenuItem } from '../types/MenuItem';

type RestaurantMenuProps = {
  menu: MenuItem;
  handleSelectMenu: (orders: MenuItem) => void;
};

function RestaurantMenu({ menu, handleSelectMenu }: RestaurantMenuProps) {
  const menuInfo = `${menu.name}(${menu.price.toLocaleString()})원`;
  return (
    <li>
      <span>
        {menuInfo}
      </span>
      <button
        type="button"
        name={`#${menu.name}`}
        onClick={() => handleSelectMenu(menu)}
      >
        선택
      </button>
    </li>
  );
}

export default RestaurantMenu;
