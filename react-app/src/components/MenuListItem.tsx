import { useLocalStorage } from 'usehooks-ts';
import Menu from '../types/Menu';

type MenuListItemProps = {
  menu: Menu
}

export default function MenuListItem({ menu }: MenuListItemProps) {
  const [cartList, setCartList] = useLocalStorage<Menu[]>('cartList', []);

  const handleClickMenuButton = (cartItem: Menu) => {
    setCartList((prevValue: Menu[]) => [...prevValue, cartItem]);
  };

  return (
    <li
      style={{
        display: 'flex',
        paddingBlock: '0.5rem',
      }}
    >
      <span
        style={{
          margin: '0px auto',
        }}
      >
        {menu.name}
        (
        {menu.price.toLocaleString('ko-kr')}
        원)
      </span>
      <button
        name={`#${menu.name}`}
        type="button"
        style={{
          marginLeft: '0.5rem',
        }}
        onClick={() => {
          handleClickMenuButton(menu);
        }}
      >
        선택
      </button>
    </li>
  );
}
