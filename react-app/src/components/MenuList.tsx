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
        menuList.map((menuListItem, index) => {
          const keyId = `${menuListItem.id}-${index}`;

          return (
            <MenuListItem
              key={keyId}
              menuItem={menuListItem}
            >
              <MenuActionButton
                name={`#${menuListItem.name}`}
                title="선택"
                onClick={() => addMenu(menuListItem)}
              />
            </MenuListItem>
          );
        })
      }
    </ul>
  );
}
