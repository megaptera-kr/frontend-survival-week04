import moneyformat from '../utils/common';

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
    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <span style={{ margin: '0px auto' }}>
        {restaurantMenu.name}({moneyformat(restaurantMenu.price)}원)
      </span>
      <button
        type='button'
        name={`#${restaurantMenu.name}`}
        style={{ marginLeft: '0.5rem' }}
        onClick={handleClick}
      >
        선택
      </button>
    </li>
  );
}

export default RestaurantMenu;
