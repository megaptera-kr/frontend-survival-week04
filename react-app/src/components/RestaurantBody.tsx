import RestaurantNameRow from './RestaurantNameRow';
import RestaurantCategoryRow from './RestaurantCategoryRow';
import RestaurantMenuRow from './RestaurantMenuRow';

import Restaurant from '../types/Restaurant';
import MenuItem from '../types/MenuItem';

type RestaurantBodyProps = {
    restaurants: Restaurant[];
    setCartItems: React.Dispatch<React.SetStateAction<MenuItem[]>>
    cartItems: MenuItem[];
}

export default function RestaurantBody({
  restaurants,
  setCartItems,
  cartItems,
}: RestaurantBodyProps) {
  return (
    <tbody className="restaurant-body">
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <RestaurantNameRow restaurant={restaurant} />
          <RestaurantCategoryRow restaurant={restaurant} />
          <RestaurantMenuRow
            restaurant={restaurant}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        </tr>
      ))}
    </tbody>
  );
}
