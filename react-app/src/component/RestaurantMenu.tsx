import RestaurantMenuType from '../types/RestaurantMenuType';

type RestaurantMenuProps = {
  restaurantMenu: RestaurantMenuType;
  handleUpdateCart: () => void;
};

function RestaurantMenu({
  restaurantMenu,
  handleUpdateCart,
}: RestaurantMenuProps) {
  const handleClick = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    localStorage.setItem(
      'cart',
      JSON.stringify([...cartItems, restaurantMenu]),
    );

    handleUpdateCart();
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
