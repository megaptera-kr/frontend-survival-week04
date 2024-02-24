import moneyformat from '../utils/common';

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
    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <span style={{ margin: '0px auto' }}>
        {cartItem.name}({moneyformat(cartItem.price)}원)
      </span>
      <button
        type='button'
        style={{ marginLeft: '0.5rem' }}
        onClick={handleClick}
      >
        취소
      </button>
    </li>
  );
}
