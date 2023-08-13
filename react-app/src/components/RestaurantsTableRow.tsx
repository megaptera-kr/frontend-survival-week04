import { IRestaurant } from '../types/restaurants';
import MenuList from './MenuList';

type RestaurantsTableRowProps = {
  restaurant: IRestaurant;
}

export default function RestaurantsTableRow({ restaurant }: RestaurantsTableRowProps) {
  const { name, category, menu } = restaurant;
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <MenuList menuList={menu} />
      </td>
    </tr>
  );
}
