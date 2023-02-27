import MenuItem from './MenuItem';

import Menu from '../types/Menu';

type RestaurantMenusProps = {
    menu: Menu[]
}

export default function RestaurantMenus({ menu }:RestaurantMenusProps) {
  return (
    <td>
      <ul>
        {menu.map((data) => (
          <MenuItem key={data.id} data={data} showSelectBtn />
        ))}
      </ul>
    </td>
  );
}
