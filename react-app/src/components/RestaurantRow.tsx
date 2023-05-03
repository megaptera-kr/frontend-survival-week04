import Menu from '../types/Menu';
import Restaurant from '../types/Restaurant';

import MenuRow from './MenuRow';

interface RestaurantRowProps{
    restaurant: Restaurant;
}

function RestaurantRow({
  restaurant,
} : RestaurantRowProps) {
  return (
    <tr>
      <td style={{ width: '120px' }}>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul style={{ listStyle: 'none' }}>
          {
            restaurant.menu.map((menu:Menu) => (
              <MenuRow key={menu.id} menu={menu} />
            ))
          }
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;
