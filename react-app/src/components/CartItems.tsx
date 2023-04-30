import { useLocalStorage } from 'usehooks-ts';

import Menu from '../types/Menu';

function CartItems() {
  const [cartItems, setCartItems] = useLocalStorage<Menu[]>('cart', []);

  const handleClick = (index: number) => {
    const changedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(changedCartItems);
  };

  return (
    <ul style={{
      listStyle: 'none',
    }}
    >
      {
        cartItems.map((menu: Menu, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${index}-${menu.id}`}>
            <span style={{
              display: 'inline-block',
              width: '180px',
              textAlign: 'center',
            }}
            >
              {menu.name}
              {' '}
              (
              {menu.price.toLocaleString()}
              원)
            </span>
            <button type="button" onClick={() => handleClick(index)}>취소</button>
          </li>
        ))
      }
    </ul>
  );
}

export default CartItems;
