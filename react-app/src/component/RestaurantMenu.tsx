import RestaurantMenu from '../types/RestaurantMenuType';

type RestaurantMenuProps = {
  restaurantMenu: RestaurantMenu;
};

function RestaurantMenu({ restaurantMenu }: RestaurantMenuProps) {
  const handleClick = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    localStorage.setItem(
      'cart',
      JSON.stringify([...cartItems, restaurantMenu]),
    );
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
