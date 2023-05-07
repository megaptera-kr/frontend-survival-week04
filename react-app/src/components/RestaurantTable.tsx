import RestaurantHead from './RestaurantHead';
import RestaurantBody from './RestaurantBody';

import Restaurant from '../types/Restaurant';
import MenuItem from '../types/MenuItem';

type RestaurantTableProps = {
    restaurants: Restaurant[];
    setCartItems: React.Dispatch<React.SetStateAction<MenuItem[]>>
    cartItems: MenuItem[];
  }

export default function RestaurantTable({
  restaurants,
  setCartItems,
  cartItems,
}: RestaurantTableProps) {
  return (
    <table className="restaurant-table">
      <RestaurantHead />
      <RestaurantBody
        restaurants={restaurants}
        setCartItems={setCartItems}
        cartItems={cartItems}
      />
    </table>
  );
}
