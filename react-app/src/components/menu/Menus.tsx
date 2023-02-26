import styled from 'styled-components';
import Menu from '../../types/Menu';
import { Order } from '../../types/Order';
import MenuBox from './MenuBox';

const MenuContainer = styled.div`
  display: flex;
`;

type MenusProps = {
  menus: Menu[];
  order: Order;
  setOrder: (arg: Order) => void;
};

export default function Menus({ menus, order, setOrder }: MenusProps) {
  return (
    <MenuContainer>
      {menus.map((menu) => (
        <MenuBox
          key={menu.name}
          menu={menu}
          order={order}
          setOrder={setOrder}
        />
      ))}
    </MenuContainer>
  );
}
