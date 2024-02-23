import RestaurantMenuType from '../types/RestaurantMenuType';
import CartItemType from '../types/CartItemType';

type RestaurantMenuProps = {
  restaurantMenu: RestaurantMenuType;
  handleAddCartItem: (item: CartItemType) => void;
};

function RestaurantMenu({
  restaurantMenu,
  handleAddCartItem,
}: RestaurantMenuProps) {
  const handleClick = () => {
    handleAddCartItem(restaurantMenu);
  };

  return (
    <li>
      <span>
        {restaurantMenu.name}({restaurantMenu.price})
      </span>
      <button type='button' onClick={handleClick}>
        선택
      </button>
    </li>
  );
}

export default RestaurantMenu;
