import Menu from '../types/Menu';
import Restaurant from '../types/Restaurant';

import MenuItem from './MenuItem';

type RestaurantTableRowProps = {
    restaurant: Restaurant
    cart: Menu[]
    setCart: (value: Menu[])=> void
}

export default function RestaurantTableRow(
  {
    restaurant,
    cart,
    setCart,
  }:RestaurantTableRowProps,
) {
  return (
    <tr>
      <td style={{ paddingInline: '2rem' }}>{restaurant.name}</td>
      <td style={{ paddingInline: '2rem' }}>{restaurant.category}</td>
      <td style={{ paddingInline: '2rem' }}>
        <ul>
          {restaurant.menu.map((menu: Menu) => (
            <MenuItem
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
