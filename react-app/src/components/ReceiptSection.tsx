import Receipt from '../types/Receipt';
import thousandSeparator from '../utils/thousandSeparator';

type ReceiptSectionProps = {
  receipt: Receipt;
}

export default function ReceiptSection({
  receipt,
}: ReceiptSectionProps) {
  const { menu } = receipt;
  return (
    <div>
      {receipt.totalPrice
        ? (
          <div>
            <h2>영수증</h2>
            <h3>주문번호</h3>
            <p>{receipt.id}</p>
            <h3>주문목록</h3>
            <ul>
              {menu.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={`${item.name}-${index}`}>
                  {item.name}
                  (
                  {thousandSeparator(item.price)}
                  원)
                </li>
              ))}
            </ul>
            <p>
              총 가격:
              {' '}
              {thousandSeparator(receipt.totalPrice)}
              원
            </p>
          </div>
        )
        : (
          <p>[영수증 나오는 곳]</p>
        )}
    </div>
  );
}
