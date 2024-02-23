import CartItemType from '../types/CartItemType';

type CartItemProps = {
  cartItem: CartItemType;
  handleRemoveCartItem: (item: CartItemType) => void;
};

export default function CartItem({
  cartItem,
  handleRemoveCartItem,
}: CartItemProps) {
  const handleClick = () => {
    handleRemoveCartItem(cartItem);
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
