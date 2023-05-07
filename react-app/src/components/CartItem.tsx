import MenuItem from '../types/MenuItem';

type CartItemProps = {
    cartItem: MenuItem;
    cartItems: MenuItem[];
    setCartItems: React.Dispatch<React.SetStateAction<MenuItem[]>>
}

function CartItem({ cartItem, cartItems, setCartItems }: CartItemProps) {
  const handleClick = () => {
    setCartItems(cartItems.filter((menuItem) => menuItem.id !== cartItem.id));
  };

  return (
    <li className="cart-item">
      <span>
        {cartItem.name}
        (
        {cartItem.price.toLocaleString()}
        )원
      </span>
      <button type="button" onClick={handleClick}>취소</button>
    </li>
  );
}

export default CartItem;
