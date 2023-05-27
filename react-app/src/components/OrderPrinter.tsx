import _ from 'lodash';

import ReceiptType from '../types/ReceiptType';
import OrderItem from './OrderItem';

type OrderPrinterProps = {
    receipt: ReceiptType
}

export default function OrderPrinter({ receipt }: OrderPrinterProps) {
  if (_.isEmpty(receipt)) {
    return <p>[영수증 나오는 곳]</p>;
  }

  const { id, menu, totalPrice } = receipt;

  return (
    <div>
      <h2>영수증</h2>
      <div>
        <h3>주문 번호</h3>
        <p>{id}</p>
      </div>

      <div>
        <h3>주문 목록</h3>
        <ul>
          {menu.map((menuItem, index) => {
            const key = `${menuItem.id}-${index}`;
            return (
              <OrderItem key={key} menuItem={menuItem} />
            );
          })}
        </ul>
      </div>

      <h3>
        총 가격
        {' '}
        {totalPrice}
      </h3>
    </div>
  );
}
