import { RestaurantMenu } from '../types';

interface RestaurantMenuRowProps {
  menu: RestaurantMenu;
  handleClickMenu: (menu: RestaurantMenu) => void;
}

export default function RestaurantMenuRow({ menu, handleClickMenu }:RestaurantMenuRowProps) {
  const { id, name, price } = menu;
  const current = Date.now().toLocaleString();
  const menuId = `${current}#${id}`;
  return (
    <ul
      style={{
        display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '1rem',
      }}
    >
      <li style={{ listStyle: 'none', textAlign: 'center' }}>
        {name}
        (
        {price}
        원)
      </li>
      <button type="button" name={`#${name}`} onClick={() => handleClickMenu({ ...menu, id: menuId })}>선택</button>
    </ul>
  );
}
