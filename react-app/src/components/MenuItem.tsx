import Menu from '../types/Menu';

type MenuItemProps = {
    menu: Menu
    cart: Menu[]
    setCart: (value: Menu[])=> void
}

export default function MenuItem({
  menu,
  cart,
  setCart,
}:MenuItemProps) {
  const handleClick = () => {
    setCart([...cart, menu]);
  };

  return (
    <li key={menu.id} style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <span style={{ margin: '0px auto' }}>
        {menu.name}
        (
        {menu.price.toLocaleString()}
        원)
      </span>
      <button
        name={`#${menu.name}`}
        type="button"
        style={{ marginLeft: '0.5rem' }}
        onClick={handleClick}
      >
        선택
      </button>
    </li>
  );
}
