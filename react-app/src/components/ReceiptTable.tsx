import Receipt from '../Types/Receipt';

type ReceiptTableProps = {
  receipts: Receipt;
};

export default function ReceiptTable({ receipts }: ReceiptTableProps) {
  return (
    <div className="Receipt">
      <h3>영수증 나오는 곳</h3>
      {!Object.keys(receipts).length ? (
        '주문을 하면 영수증이 출력 됩니다.'
      ) : (
        <div>
          <p>
            {' 주문 번호 : '}
            {receipts.id}
          </p>
          <p>주문 목록</p>
          <ul>
            {receipts.menu.map((item) => (
              <li key={item.name}>
                {item.name}
                {' ( '}
                {item.price.toLocaleString()}
                {' ) '}
                {' 원 '}
              </li>
            ))}
          </ul>
          <p>
            {' 총 주문 금액 : '}
            {receipts.totalPrice.toLocaleString()}
            {' 원 '}
          </p>
        </div>
      )}
    </div>
  );
}
