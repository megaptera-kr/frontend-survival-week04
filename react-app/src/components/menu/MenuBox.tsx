import styled from 'styled-components';
import Menu from '../../types/Menu';
import { Order } from '../../types/Order';

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 150px;
  height: 150px;
  border: 1px solid #000;
  margin: 0px 5px 0px 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 5px;
  justify-content: center;
`;

const CenterBox = styled.div`
  text-align: center;
`;

const MenuBtn = styled.button.attrs({ type: 'button' })`
  background-color: transparent;
  width: 50%;
  padding: 5px;
  cursor: pointer;
  margin: 0 5px;
  :hover {
    background-color: orange;
  }
`;

type MenuBoxProps = {
  menu: Menu;
  order: Order;
  setOrder: (arg: Order) => void;
};

function MenuBox({ menu, order, setOrder }: MenuBoxProps) {
  return (
    <MenuDiv>
      <CenterBox>
        <h2>{menu.name}</h2>
      </CenterBox>
      <CenterBox>
        <h3>
          <span>{menu.price.toLocaleString()}</span>
          <span>원</span>
        </h3>
      </CenterBox>
      <ButtonContainer>
        <MenuBtn
          name={`#${menu.name}`}
          onClick={() => setOrder({
            menu: order.menu ? [...order.menu, menu] : [menu],
            totalPrice: 0,
          })}
        >
          ✅
        </MenuBtn>
      </ButtonContainer>
    </MenuDiv>
  );
}

export default MenuBox;
