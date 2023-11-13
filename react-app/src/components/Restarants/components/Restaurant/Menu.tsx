import { MenuInterface } from '../../../../Interfaces/Restaurant.interface';

interface MenuProps {
  menues: MenuInterface[]
  handleSetCart: (menu: MenuInterface) => void
}

function Menu({ menues, handleSetCart }: MenuProps) {
  const menuList = menues.map((menu) => (
    <li key={`menu_${menu.id}`}>
      {menu.name}
      (
      {menu.price}
      )
      <button type="button" name={`#${menu.name}`} onClick={() => handleSetCart(menu)}>선택</button>
    </li>
  ));
  return (
    <ul>
      {menuList}
    </ul>
  );
}

export default Menu;
