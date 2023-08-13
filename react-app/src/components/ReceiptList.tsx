import _ from 'lodash';

export default function ReceiptList({ receipt }) {
  if (_.isEmpty(receipt)) {
    return <p>[영수증 나오는 곳]</p>;
  }
  return (
    <div>
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <p>{receipt?.id}</p>
      </div>
      <div>
        <h3>주문목록</h3>
        <ul>
          {receipt?.menu?.map((item) => (
            <li key={item.id}>
              {item.name}
              (
              {item.price.toLocaleString()}
              원)
            </li>
          ))}
        </ul>
      </div>
      <p>
        총 가격:
        {' '}
        {receipt?.totalPrice.toLocaleString()}
        원
      </p>
    </div>
  );
}
