import { useLocalStorage } from 'usehooks-ts';
import MenuType from '../types/MenuType';
import MenuItem from './MenuItem';

type MenuProps = {
    menu: MenuType[]
}

export default function Menu({ menu }:MenuProps) {
  const [lunchFood, selectLunchFood] = useLocalStorage<MenuType[]>('cart', []);

  // eslint-disable-next-line no-shadow
  const handelMenuBtn = (menu: MenuType) => {
    selectLunchFood([
      ...lunchFood,
      menu,
    ]);
  };
  return (
    <ul>
      {menu.map((menuItem) => (
        <li key={menuItem.id} style={{ display: 'flex', paddingBlock: '.5rem' }}>
          <MenuItem key={menuItem.id} menuItem={menuItem} />
          <button
            onClick={() => { handelMenuBtn(menuItem); }}
            type="button"
          >
            선택

          </button>
        </li>
      ))}
    </ul>
  );
}
