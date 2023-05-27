import RestaurantsType from '../types/RestaurantsType';
import Menu from './Menu';

type MenuBodyProps = {
  restaurant: RestaurantsType
}

export default function MenuBody({ restaurant }: MenuBodyProps) {
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
