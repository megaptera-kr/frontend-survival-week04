import { MenuType, RestaurantType } from '../types/restaurants';
import Menu from './Menu';

type PropTypes = {
  restaurant: RestaurantType;
  handleAddClick: (menu: MenuType) => void;
};

export default function Restaurant({ restaurant, handleAddClick }: PropTypes) {
  return (
    <>
      <div>{restaurant.name}</div>
      <div>{restaurant.category}</div>
      <div>
        {restaurant.menu.map((menu) => (
          <Menu key={menu.id} menu={menu}>
            <button
              type="button"
              name={`#${menu.name}`}
              onClick={() => handleAddClick(menu)}
            >
              선택
            </button>
          </Menu>
        ))}
      </div>
    </>
  );
}
