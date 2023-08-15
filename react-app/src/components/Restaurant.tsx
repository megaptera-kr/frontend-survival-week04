import Restaurant from '../types/RestaurantType';
import Menu from './Menu';

export default function Restaurant({ restaurant }: { restaurant: Restaurant }) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <Menu menu={menu} />
      </td>
    </tr>
  );
}
