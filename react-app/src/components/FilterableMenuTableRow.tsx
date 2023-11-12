import { MenuItem, RestaurantItem } from '../types/restaurantItemType';

type FilterableMenuTableRowProps = {
  restauant: RestaurantItem;
  onClick: (item: MenuItem) => void;
};

export default function FilterableMenuTableRow({
  restauant,
  onClick,
}: FilterableMenuTableRowProps) {
  return (
    <tr>
      <td>{restauant.name}</td>
      <td>{restauant.category}</td>
      <td>
        <ul>
          {restauant.menu.map((item) => (
            <li key={`${item.id}-${item.name}-${item.price}`}>
              <span>{`${item.name}(${item.price.toLocaleString()}원)`}</span>
              <button
                type="button"
                name={`#${item.name}`}
                onClick={() => onClick(item)}
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
