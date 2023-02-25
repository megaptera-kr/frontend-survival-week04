import Menu from '../types/Menu';
import Restaurant from '../types/Restaurants';
import RestaurantRow from './RestaurantRow';

type RestaurantsTableProps = {
    restaurants: Restaurant[];
    cart: Menu[];
    setCart: (value:Menu[]) => void;

}

export default function RestaurantsTable({
  restaurants, cart, setCart,
}:
  RestaurantsTableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>식당 이름</td>
            <td>종류</td>
            <td>메뉴</td>
          </tr>
        </thead>
        <tbody>
          {
            restaurants.map((restaurant) => (
              <RestaurantRow
                key={restaurant.id}
                restaurant={restaurant}
                cart={cart}
                setCart={setCart}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
