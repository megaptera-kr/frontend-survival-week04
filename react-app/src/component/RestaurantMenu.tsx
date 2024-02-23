import RestaurantMenu from '../types/RestaurantMenuType';

type RestaurantMenuProps = {
  restaurantMenu: RestaurantMenu;
};

function RestaurantMenu({ restaurantMenu }: RestaurantMenuProps) {
  return (
    <li>
      <span>
        {restaurantMenu.name}({restaurantMenu.price})
      </span>
      <button type='button'>선택</button>
    </li>
  );
}

export default RestaurantMenu;
