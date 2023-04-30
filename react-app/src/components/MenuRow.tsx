import { useLocalStorage } from 'usehooks-ts';

import Menu from '../types/Menu';

interface MenuRowProps {
    menu : Menu;
}
function MenuRow({ menu } : MenuRowProps) {
  const [cartItems, setCartItems] = useLocalStorage<Menu[]>('cart', []);

  const addCart = () => {
    setCartItems([...cartItems, menu]);
  };

  return (
    <li style={{ padding: '5px 0' }}>
      <span style={{
        display: 'inline-block',
        width: '180px',
        textAlign: 'center',
      }}
      >
        {menu.name}
        (
        {menu.price.toLocaleString()}
        원)
      </span>
      <button type="button" name={`#${menu.name}`} onClick={addCart}>선택</button>
    </li>
  );
}

export default MenuRow;
