import RestaurantTableList from './RestaurantTableList';
import RestaurantTableHeader from './RestaurantTableHeader';

import { Restaurant } from '../types/restaurants';
import { Cart } from '../types/cart';

type RestaurantTableProps = {
  restaurants: Restaurant[];
  cart: Cart;
  setCart: (value: Cart) => void;
}

export default function RestaurantTable({
  restaurants, cart, setCart,
}: RestaurantTableProps) {
  return (
    <table>
      <RestaurantTableHeader />
      <RestaurantTableList
        restaurants={restaurants}
        cart={cart}
        setCart={setCart}
      />
    </table>
  );
}
