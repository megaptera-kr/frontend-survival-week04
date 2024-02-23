import RestaurantMenu from '../types/RestaurantMenuType';

type CartItemProps = {
  cartItem: RestaurantMenu;
  handleUpdateCart: () => void;
};

export default function CartItem({
  cartItem,
  handleUpdateCart,
}: CartItemProps) {
  const handleClick = () => {
    const cartItems: RestaurantMenu[] = JSON.parse(
      localStorage.getItem('cart') || '[]',
    );
    const updatedCartItems: RestaurantMenu[] = cartItems.filter(
      (item: RestaurantMenu) => item.id !== cartItem.id,
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
