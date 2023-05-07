import RestaurantTableListMenu from './RestaurantTableListMenu';

import { Cart } from '../types/cart';
import { Restaurant } from '../types/restaurants';

type RestaurantTableListProps = {
  restaurants: Restaurant[],
  cart: Cart;
  setCart: (value: Cart) => void;
}

export default function RestaurantTableList({
  restaurants, cart, setCart,
}: RestaurantTableListProps) {
  return (
    <tbody>
      {restaurants.map((restaurant: Restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.category}</td>
          <RestaurantTableListMenu
            menuList={restaurant.menu}
            cart={cart}
            setCart={setCart}
          />
        </tr>
      ))}
    </tbody>
  );
}
