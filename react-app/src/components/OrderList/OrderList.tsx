import React from 'react';
import { OrderItem } from '../../types';

function OrderList() {
  const [orderList, setOrderList] = React.useState<OrderItem[]>([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  return (
    <div style={{ marginBottom: '24px' }}>
      <h2>점심 바구니</h2>
      {
        orderList.length > 0 && (
          <ul style={{ width: '300px', padding: 0 }}>
            {orderList.map((order) => (
              <li
                key={order?.id}
                style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                }}
              >
                <span>{`${order?.name}(${order?.price?.toLocaleString()}원)`}</span>
                <button type="button">취소</button>
              </li>
            ))}
          </ul>
        )
      }
      <button type="button">
        {`합계: ${totalPrice.toLocaleString()}원 주문`}
      </button>
    </div>
  );
}

export default OrderList;
