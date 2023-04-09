import Restaurant from '../types/Restaurant';

import Menu from './Menu';

type RestaurantItemProps = {
  restaurant: Restaurant;
};

export default function RestaurantItem({ restaurant }: RestaurantItemProps) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        {category}
      </td>
      <td>
        <Menu menu={menu} />
      </td>
    </tr>
  );
}
