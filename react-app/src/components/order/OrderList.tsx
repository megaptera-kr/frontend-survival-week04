import styled from 'styled-components';
import { Order } from '../../types/Order';
import Receipt from '../../types/Receipt';
import reduceOrders from '../../utils/orderUtils';
import Title from '../Title';
import OrderTable from './OrderTable';

const Container = styled.div`
  width: 50%;
  padding: 2%;
`;

type OrderListProps = {
  order: Order;
  setReceipt: (arg: Receipt) => void;
};

function OrderList({ order, setReceipt }: OrderListProps) {
  const result = reduceOrders(order.menu);

  return (
    <Container>
      <Title title="주문정보" />
      {result?.length > 0 ? (
        <OrderTable
          order={order}
          orderMenu={order.menu}
          setReceipt={setReceipt}
        />
      ) : (
        <h4>제품을 선택해 주세요</h4>
      )}
    </Container>
  );
}

export default OrderList;
