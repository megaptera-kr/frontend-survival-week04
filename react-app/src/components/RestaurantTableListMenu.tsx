import { Cart } from '../types/cart';
import { Menu } from '../types/restaurants';

type RestaurantTableListMenuProps = {
  menuList: Menu[];
  cart: Cart;
  setCart: (value: Cart) => void;
}

export default function RestaurantTableListMenu({
  menuList, cart, setCart,
}: RestaurantTableListMenuProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const filterMenuId = menuList.find((menu) => menu.id === button.value);

    setCart({
      menu: [...cart.menu, filterMenuId!],
      totalPrice: cart.totalPrice + filterMenuId!.price,
    });
  };
  return (
    <td>
      <div>
        {menuList.map((menu: Menu, idx: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${menu.id}-${idx}`} style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none' }}>
            <p>
              {`${menu.name}(${menu.price.toLocaleString('ko-kr')}원)`}
            </p>
            <button
              type="button"
              style={{ marginLeft: '3rem' }}
              value={menu.id}
              name={`#${menu.name}`}
              onClick={handleClick}
            >
              선택
            </button>
          </li>
        ))}
      </div>
    </td>
  );
}
