import { RestaurantMenu } from '../types/restaurant';

type RestaurantMenuProps = {
    restaurantMenu: RestaurantMenu;
    mode: 'add' | 'remove';
    handleSelectMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleRemoveSelectMenu: (index:number) => void;
    index: number;
}

export default function RestaurantMenuList({
  restaurantMenu,
  mode = 'add',
  handleSelectMenu,
  handleRemoveSelectMenu,
  index,
}:RestaurantMenuProps) {
  return (
    <ul key={restaurantMenu?.id} style={{ listStyle: 'none' }}>
      <li>
        <span>
          {restaurantMenu?.name}
        </span>
        <span>
          (
          {restaurantMenu?.price.toLocaleString()}
          원)
        </span>
        <button
          id={restaurantMenu?.id}
          name={`#${restaurantMenu?.name}`}
          type="button"
          onClick={mode === 'add' ? () => handleSelectMenu(restaurantMenu) : () => handleRemoveSelectMenu(index)}
        >
          {mode === 'add' ? '선택' : '취소'}
        </button>
      </li>
    </ul>
  );
}
