import Restaurant from '../types/Restaurant';
import Foods from './Foods';

type RestaurantRowProps = {
    restaurants: Restaurant[];
  }

export default function RestaurantRow({ restaurants }: RestaurantRowProps) {
  return (
    <>
      {restaurants.map(({
        id, category, name, menu,
      }: Restaurant) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{category}</td>
          <td>
            <Foods menu={menu} buttonType="선택" />
          </td>
        </tr>
      ))}
    </>
  );
}
