import RestaurantMenu from '../types/RestaurantMenuType';

type CartItemProps = {
  cartItem: RestaurantMenu;
};

export default function CartItem({ cartItem }: CartItemProps) {
  return (
    <div>
      <span>
        {cartItem.name}({cartItem.price})
      </span>
      <button type='button'>취소</button>
    </div>
  );
}
