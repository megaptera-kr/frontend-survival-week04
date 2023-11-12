import { Menu } from '../types';

type Props = {
    menus : Menu[],
    handleClickMenu: (item : Menu) => void
}

function TableMenuRow({ menus, handleClickMenu } : Props) {
  return (
    <ul>
      {menus.map((menu) => (
        <li key={menu.id} style={{ marginBottom: '10px' }}>
          <span>
            {menu.name}
            (
            {menu.price.toLocaleString()}
            )원
          </span>
          <button name={`#${menu.name}`} type="button" onClick={() => handleClickMenu(menu)}>선택</button>
        </li>
      ))}
    </ul>
  );
}

export default TableMenuRow;
