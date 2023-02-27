import Menu from '../types/Menu';

type MenuListProps = {
    menu: Menu;
    cart: Menu[];
    setCart: (value:Menu[]) => void;
};

export default function MenuList({
  menu, cart, setCart,
} : MenuListProps) {
  const handleClick = () => {
    const selectedMenu:Menu = {
      id: menu.id,
      name: menu.name,
      price: menu.price,
    };
    setCart([...cart, selectedMenu]);
  };
  return (
    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <span style={{ margin: '0px auto' }}>
        {menu.name}
        (
        {menu.price.toLocaleString()}
        원)
      </span>
      <button
        style={{ marginLeft: '0.5rem' }}
        type="button"
        onClick={handleClick}
        name={`#${menu.name}`}
      >
        선택
      </button>
    </li>
  );
}
