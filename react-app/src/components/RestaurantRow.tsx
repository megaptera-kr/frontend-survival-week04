import thousandSeparator from '../utils/thousandSeparator';

import Menu from '../types/Menu';
import Restaurant from '../types/Restaurant';

type RestaurantRowProps = {
    restaurant: Restaurant;
    selectedMenus: Menu[];
    setSelectedMenus: (menus: Menu[]) => void;
}

export default function RestaurantRow({
  restaurant, selectedMenus, setSelectedMenus,
}: RestaurantRowProps) {
  const { menu } = restaurant;

  const handleClick = (item: Menu) => {
    setSelectedMenus([...selectedMenus, item]);
  };
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {menu.map((item) => (
            <li key={item.id}>
              {item.name}
              (
              {thousandSeparator(item.price)}
              원)
              <button
                type="button"
                name={`#${item.name}`}
                onClick={() => handleClick(item)}
              >
                선택
              </button>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
