import Menu from '../types/Menu';
import Restaurant from '../types/Restaurant';
import RestaurantTableRow from './RestaurantTableRow';

type RestaurantTableBodyProps = {
    restaurants: Restaurant[]
    cart: Menu[]
    setCart: (value: Menu[])=> void
}

export default function RestaurantTableBody(
  {
    restaurants,
    cart,
    setCart,
  }:RestaurantTableBodyProps,
) {
  return (
    <tbody>
      {restaurants?.map((restaurant) => (
        <RestaurantTableRow
          key={restaurant.id}
          restaurant={restaurant}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </tbody>
  );
}
