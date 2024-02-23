import CartItemType from '../types/CartItemType';

type CartItemProps = {
  cartItem: CartItemType;
  handleUpdateCart: () => void;
};

export default function CartItem({
  cartItem,
  handleUpdateCart,
}: CartItemProps) {
  const handleClick = () => {
    const cartItems: CartItemType[] = JSON.parse(
      localStorage.getItem('cart') || '[]',
    );
    const updatedCartItems: CartItemType[] = cartItems.filter(
      (item: CartItemType) => item.id !== cartItem.id,
    );
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    handleUpdateCart();
  };

  return (
    <div>
      <span>
        {cartItem.name}({cartItem.price})
      </span>
      <button type='button' onClick={handleClick}>
        취소
      </button>
    </div>
  );
}
