import styled from 'styled-components';
import { useInterval, useLocalStorage } from 'usehooks-ts';
import { Order } from '../../types/Order';
import Receipt from '../../types/Receipt';
import OrderList from './OrderList';
import ReceiptList from './ReceiptList';

const OrderContainer = styled.div`
  display: flex;
  width: 100%;
`;

export default function Order({ order }: { order: Order }) {
  const [receipt, setReceipt] = useLocalStorage('receipt', {} as Receipt);

  useInterval(() => {
    setReceipt({} as Receipt);
  }, 5_000);

  return (
    <OrderContainer>
      <OrderList order={order} setReceipt={setReceipt} />
      <ReceiptList receipt={receipt} />
    </OrderContainer>
  );
}
