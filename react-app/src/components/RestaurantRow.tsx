import Restaurant from '../types/Restaurant';
import Menu from '../types/Menu';

interface RestaurantRowProps {
    restaurant: Restaurant;
    onAddCart: (menuItem: Menu) => void;
}

export default function RestaurantRow({ restaurant, onAddCart }: RestaurantRowProps) {
  const { name, category, menu } = restaurant;

  return (
    <tr style={{ textAlign: 'center' }}>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        {menu.map((menuItem) => (
          <ul key={menuItem.id}>
            <li style={{ listStyle: 'none' }}>
              <span style={{
                paddingRight: 10, paddingLeft: 10, width: 180, display: 'inline-block',
              }}
              >
                {menuItem.name}
                (
                {(menuItem.price).toLocaleString('ko-kr')}
                원)
              </span>
              <button
                key={menuItem.id}
                type="button"
                name={`#${menuItem.name}`}
                onClick={() => {
                  onAddCart(menuItem);
                }}
              >
                선택
              </button>
            </li>
          </ul>
        ))}
      </td>
    </tr>
  );
}
