import Restaurant from '../types/Restaurant';
import MenuItem from '../types/MenuItem';

type RestaurantMenuRowProps = {
    restaurant: Restaurant;
    setCartItems: React.Dispatch<React.SetStateAction<MenuItem[]>>
    cartItems: MenuItem[];
}

export default function RestaurantMenuRow({
  restaurant,
  setCartItems,
  cartItems,
}: RestaurantMenuRowProps) {
  const handleClick = (menuItem: MenuItem) => {
    setCartItems([...cartItems, menuItem]);
  };
  return (
    <ul className="restaurant-menu-row">
      {restaurant.menu.map((menuItem) => (
        <li key={menuItem.id}>
          <span>
            {menuItem.name}
            (
            {menuItem.price.toLocaleString()}
            원)
          </span>
          <button type="button" name={`#${menuItem.name}`} onClick={() => handleClick(menuItem)}>선택</button>
        </li>
      ))}
    </ul>
  );
}
