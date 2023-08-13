import priceToLocal from '../../utils/priceToLocal';
import { IRestaurantMenu } from '../types/restaurants';

type MenuListItemProps = {
  menuItem: IRestaurantMenu
} & React.PropsWithChildren<any>;

export default function MenuListItem({ menuItem, children }: MenuListItemProps) {
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
        {`${name}(${priceToLocal(price)}원)`}
      </span>
      {children}
    </li>
  );
}
