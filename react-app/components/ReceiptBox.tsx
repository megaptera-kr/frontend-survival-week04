import { useInterval } from 'usehooks-ts';
import { Receipt, SetValue } from '../types';

type Props = {
  receipt : Receipt | null
  setReceipt : SetValue<Receipt | null>
}

function ReceiptBox({ receipt, setReceipt } :Props) {
  useInterval(
    () => {
      setReceipt(null);
    },
    receipt ? 5000 : null,
  );

  return (
    <div>
      <p>[영수증 나오는 곳]</p>
      {receipt && (
        <div style={{
          border: '1px solid black',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <h2>영수증</h2>
          <h3>주문번호</h3>
          <p>{receipt?.id}</p>
          <h3>주문 목록</h3>
          <ul>
            {receipt?.menu.map((el) => (
              <li key={el.id}>
                {el.name}
                (
                {el.price}
                원)
              </li>
            ))}
          </ul>
          <p>
            총 가격:
            {' '}
            {receipt?.totalPrice.toLocaleString()}
            원
          </p>
        </div>
      ) }
    </div>
  );
}

export default ReceiptBox;
