import { useLocalStorage } from 'usehooks-ts';

import Orders from '../types/Orders';
import Receipt from '../types/Receipt';

export default function Bucket() {
  const [orderList, setOrderList] = useLocalStorage<Orders[]>('orderList', []);
  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', {
    orders: [],
    totalPrice: 0,
    receiptNo: '',
  });

  let totalPrice = 0;
  orderList?.map((order) => {
    totalPrice += order.price;
    return totalPrice;
  });

  const cancelOrder = (orderKey: string) => {
    const result: Orders[] = orderList?.filter(
      (order) => orderKey !== order.orderNumber,
    );
    setOrderList(result);
  };

  const finalOrder = async () => {
    const url = 'http://localhost:3005/orders';

    const orders = {
      orders: orderList,
      totalPrice,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orders),
    });

    const data = await response.json();
    setReceipt(data.data);

    setOrderList([]);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>
        점심 바구니
      </h2>
      <ul style={{ width: '20%' }}>
        {
          orderList?.map((order, index) => (
            <li
              key={`${order.name + index}`}
              style={{
                display: 'flex',
                paddingBlock: '0.5rem',
              }}
            >
              <span style={{ margin: '0px auto' }}>
                {order.name}
                (
                {order.price.toLocaleString()}
                원)
              </span>
              <button
                type="button"
                style={{ marginLeft: '0.5rem' }}
                onClick={() => { cancelOrder(order.orderNumber); }}
              >
                취소
              </button>
            </li>
          ))
        }
      </ul>
      <button type="button" onClick={finalOrder}>
        합계:
        {' '}
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}
