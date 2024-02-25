import { Order } from '../types';

interface ReceiptProps {
  receiptData: Order | null
}

export default function Receipt({ receiptData }:ReceiptProps) {
  if (!receiptData) return null;
  const { menu, id, totalPrice } = receiptData;
  return (
    <section style={{
      position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0,0,0, 0.4',
    }}
    >
      <article style={{
        position: 'absolute', top: '50%', left: '50%', minWidth: '120px', background: 'white', border: '1px solid black', padding: '1rem', transform: 'translate(-50%, -50%)',
      }}
      >
        <h2>영수증</h2>
        <h3>주문번호</h3>
        <p>{id}</p>
        <h3>주문 목록</h3>
        <ul>
          {menu.map(({ id: menuId, name, price }) => (
            <li key={menuId}>
              {name}
              {' '}
              (
              {price.toLocaleString()}
              원)
            </li>
          ))}
        </ul>
        <h3>총금액</h3>
        <p>
          {totalPrice.toLocaleString()}
          {' '}
          원
        </p>
      </article>
    </section>
  );
}
