import MenuListItem from './MenuListItem';
import MenuActionButton from './MenuAddButton';

import useMenuBasket from '../hooks/useMenuBasket';

import { IRestaurant } from '../types/restaurants';

interface MenuProps {
  menuList: IRestaurant['menu']
}

export default function MenuList({ menuList }: MenuProps) {
  const { addMenu } = useMenuBasket();

  return (
    <ul>
      {
        menuList.map((menuListItem) => (
          <MenuListItem
            key={menuListItem.id}
            menuItem={menuListItem}
          >
            <MenuActionButton
              title="선택"
              onClick={() => addMenu(menuListItem)}
            />
          </MenuListItem>
        ))
      }
    </ul>
  );
}
