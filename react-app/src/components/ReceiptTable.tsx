import Receipt from '../Types/Receipt';

type ReceiptTableProps = {
  receipts: Receipt;
};

export default function ReceiptTable({ receipts }: ReceiptTableProps) {
  return (
    <div className="Receipt">
      <p>영수증 나오는 곳</p>
      {!Object.keys(receipts).length ? (
        ' '
      ) : (
        <div>
          <p>
            {' 주문번호 '}
            {receipts.id}
          </p>
          <p>주문 목록</p>
          <ul>
            {receipts.menu.map((item) => (
              <li key={item.name}>
                {item.name}
                {' ( '}
                {item.price.toLocaleString()}
                {' )원 '}
              </li>
            ))}
          </ul>
          <p>
            {' 총 가격: '}
            {`${receipts.totalPrice.toLocaleString()}원`}
          </p>
        </div>
      )}
    </div>
  );
}
