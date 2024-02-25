import Menu from '../../../types/Menu';

import useCartList from '../../cart/hooks/useCartList';

type MenuVuewType = 'menu' | 'cart' | 'receipt';

type MenusProps = {
  menus: Menu[];
  type: MenuVuewType;
};

export default function Menus({ menus, type = 'menu' }: MenusProps) {
  const { setCart } = useCartList();

  const handleSelectMenu = (menu: Menu) => {
    if (type === 'cart') {
      setCart((prev) => prev.filter((m) => m.id !== menu.id));
      return;
    }
    setCart((prev) => [...prev, menu]);
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {menus.map((menu) => (
        <li key={menu.id} style={{ display: 'flex', paddingBlock: '10px' }}>
          <span style={{ margin: '0 auto' }}>
            {menu.name}
            (
            {menu.price.toLocaleString()}
            원)
          </span>
          {type !== 'receipt' && (
            <button
              name={`#${menu.name}`}
              type="button"
              style={{ marginLeft: '5px' }}
              onClick={() => handleSelectMenu(menu)}
            >
              {type === 'menu' ? '선택' : '취소'}
            </button>
          )}
        </li>

      ))}
    </ul>
  );
}
