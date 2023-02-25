import Foods from './Foods';

import Restaurant from '../types/Restaurants';

type RestaurantsTableRowProps = {
  restaurant: Restaurant;
};

function RestaurantsTableRow({ restaurant }: RestaurantsTableRowProps) {
  return (
    <tr key={restaurant.name}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Foods foods={restaurant.menu} button="추가" />
      </td>
    </tr>
  );
}

export default RestaurantsTableRow;
