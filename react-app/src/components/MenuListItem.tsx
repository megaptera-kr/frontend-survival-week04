import { IRestaurantMenu } from '../types/restaurants';

type MenuListItemProps = {
  menuItem: IRestaurantMenu
}
export default function MenuListItem({ menuItem }: MenuListItemProps) {
  const { name, price } = menuItem;
  return (
    <li
      style={{
        display: 'flex',
        paddingBlock: '0.5rem',
      }}
    >
      <span
        style={{ margin: '0 auto' }}
      >
        {`${name}(${price}원)`}
      </span>
    </li>
  );
}
