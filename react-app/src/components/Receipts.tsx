import { ResOrders } from '../types/restaurants';

export default function Receipts({ orders }: {orders: ResOrders}) {
  if (!orders.menu.length) return <p>[영수증 나오는 곳]</p>;

  return (
    <div style={{ width: '25rem', border: '1px solid black', textAlign: 'center' }}>
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <p>{orders.id}</p>
      </div>
      {orders.menu.map((order) => (
        <div key={order.id}>
          <h3>주문목록</h3>
          <p>{`${order.name}(${order.price.toLocaleString()})원`}</p>
        </div>
      ))}
      <p>{`총 가격: ${orders.totalPrice.toLocaleString()}원`}</p>
    </div>
  );
}

// 영수증
// 주문번호
// 1691844247458

// 주문목록
// 짜장면(8,000원)
// 총 가격: 8,000원
