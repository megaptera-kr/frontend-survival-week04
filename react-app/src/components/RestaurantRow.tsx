import Menu from '../types/Menu';
import Restaurant from '../types/Restaurants';
import MenuList from './MenuList';

type RestaurantRowProps = {
    restaurant : Restaurant;
    cart: Menu[];
    setCart: (value:Menu[]) => void;
}

export default function RestaurantRow({
  restaurant, cart, setCart,
}:
  RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((menu) => (
            <MenuList
              key={menu.id}
              menu={menu}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </ul>
      </td>
    </tr>
  );
}
