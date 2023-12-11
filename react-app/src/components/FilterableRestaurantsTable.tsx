import Menu from '../types/Menu';
import Restaurant from '../types/Restaurant';
import RestaurantTableBody from './RestaurantTableBody';
import RestaurantTableHead from './RestaurantTableHead';

type FilterableRestaurantsTableProps = {
    restaurants: Restaurant[]
    cart: Menu[]
    setCart: (value: Menu[])=> void
}

export default function FilterableRestaurantsTable(
  {
    restaurants,
    cart,
    setCart,
  }: FilterableRestaurantsTableProps,
) {
  return (
    <div>
      <table>
        <RestaurantTableHead labels={['식당 이름', '종류', '메뉴']} />
        <RestaurantTableBody
          restaurants={restaurants}
          cart={cart}
          setCart={setCart}
        />
      </table>
    </div>
  );
}
