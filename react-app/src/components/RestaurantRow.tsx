import Restaurant from '../types/Restaurant';

interface RestaurantRowProps {
    restaurant: Restaurant;
}

export default function RestaurantRow({ restaurant } :RestaurantRowProps) {
  const { name, category, menu } = restaurant;

  return (
    <tr style={{ textAlign: 'center' }}>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        {menu.map((menuItem) => (
          <ul key={menuItem.id}>
            <li style={{ listStyle: 'none' }}>
              {menuItem.name}
              (
              {(menuItem.price).toLocaleString('ko-kr')}
              원)
            </li>
          </ul>
        ))}
      </td>
    </tr>
  );
}
