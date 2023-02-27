import { HTMLAttributes } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import Menu from '../types/Menu';

type MenuProps = {
  menu: Menu[];
} & HTMLAttributes<Element>;

export default function Menu({ menu }: MenuProps) {
  const [orderedMenu, orderMenu] = useLocalStorage<Menu[]>('orderTable', []);

  const selectMenu = (item: Menu) => {
    orderMenu([...orderedMenu, item]);
  };

  return (
    <ul>
      {menu.map((item: Menu) => (
        <li
          style={{ display: 'flex', paddingBlock: '0.5rem' }}
          key={item.id}
        >
          <span style={{ margin: '0px auto' }}>
            {item.name}
            (
            {item.price}
            원)
          </span>
          <button
            name={`#${item.name}`}
            type="button"
            onClick={() => selectMenu(item)}
          >
            선택
          </button>
        </li>
      ))}
    </ul>
  );
}
