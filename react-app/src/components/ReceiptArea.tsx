import { ReceiptType } from '../types/receipt';

interface ReceiptAreaProps {
  receipt: ReceiptType;
}
export default function ReceiptArea({ receipt }: ReceiptAreaProps) {
  return Object.keys(receipt).length ? (
    <div
      style={{
        border: '1px solid black',
        width: '50%',
        textAlign: 'center',
      }}
    >
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <span>{receipt.id}</span>
      </div>
      <div>
        <h3>주문목록</h3>
        <ul style={{ padding: '0px' }}>
          {receipt.menu.map((food) => (
            <li
              key={`${food.id}`}
              style={{ display: 'flex', paddingBlock: ' 0.5rem' }}
            >
              <span style={{ margin: '0px auto' }}>
                {`${food.name}(${food.price.toLocaleString()})원`}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p>{`총 가격: ${receipt.totalPrice.toLocaleString()}원`}</p>
    </div>
  ) : (
    <p>[영수증 나오는 곳]</p>
  );
}
