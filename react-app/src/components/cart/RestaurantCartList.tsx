import { Cart } from '../../types/cart';
import { Menu } from '../../types/restaurants';

type RestaurantCartListProps = {
  cart: Cart
  setCart(value: Cart): void
}

export default function RestaurantCartList({
  cart, setCart,
}: RestaurantCartListProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = +event.currentTarget.value;
    setCart({
      menu: [...cart.menu.filter((_, index) => index !== buttonValue)],
      totalPrice: cart.totalPrice - cart.menu[buttonValue].price,
    });
  };

  return (
    <ul style={{
      padding: '0',
      listStyle: 'none',
    }}
    >
      {cart.menu.map((menu: Menu, index: number) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={`${menu.id}-${index}`}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '10px',
          }}
        >
          <p>
            {`${menu.name}(${menu.price.toLocaleString('ko-kr')}원)`}
          </p>
          <button
            type="button"
            name={`#${menu.name}`}
            value={index}
            onClick={handleClick}
          >
            취소
          </button>
        </li>

      ))}
    </ul>
  );
}
