import styled from 'styled-components';
import { Order } from '../../types/Order';
import Restaurant from '../../types/Restaurant';
import Menus from '../menu/Menus';

const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoreName = styled.h3`
  margin: 0;
  padding: 5px;
  font-size: 25px;
  text-align: center;
`;

type StoreProps = {
  restaurant: Restaurant;
  order: Order;
  setOrder: (arg: Order) => void;
};

export default function Store({ restaurant, order, setOrder }: StoreProps) {
  return (
    <StoreContainer>
      <StoreName>{restaurant.name}</StoreName>
      <Menus menus={restaurant.menu} order={order} setOrder={setOrder} />
    </StoreContainer>
  );
}
