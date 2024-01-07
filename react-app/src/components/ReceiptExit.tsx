import { Receipt } from '../types/Receipt';

type ReceiptExitProps = {
    receipt : Receipt
}

function ReceiptExit({ receipt }: ReceiptExitProps) {
  return (
    <div>
      <div>[영수증 나오는 곳]</div>
      <div>
        {receipt.id && (
          <div>
            <h2>영수증</h2>
            <h3>
              주문번호:
              {receipt.id}
            </h3>
            <h3>주문목록</h3>
            <ul>
              {receipt.menu?.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.name}
                    (
                    {item.price.toLocaleString()}
                    )원
                  </span>
                </li>
              ))}
            </ul>
            <p>
              총 가격:
              {' '}
              {receipt.totalPrice?.toLocaleString()}
              원
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReceiptExit;
