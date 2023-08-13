import { IRestaurant } from '../types/restaurants';
import MenuListItem from './MenuListItem';

interface MenuProps {
  menuList: IRestaurant['menu']
}

export default function MenuList({ menuList }: MenuProps) {
  return (
    <ul>
      {
        menuList.map((menuListItem) => (
          <MenuListItem key={menuListItem.id} menuItem={menuListItem} />
        ))
      }
    </ul>
  );
}
