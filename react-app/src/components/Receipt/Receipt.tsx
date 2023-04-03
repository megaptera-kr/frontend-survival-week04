import { useTimeout } from 'usehooks-ts';
import { Receipt } from '../../types';

type Props = {
  receipt: Receipt;
  onRemoveReceipt: () => void;
}

function Receipt({ receipt, onRemoveReceipt }: Props) {
  // 5초 뒤 영수증 제거
  useTimeout(onRemoveReceipt, 5000);

  if (!receipt) {
    return <p>[영수증 나오는 곳]</p>;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1rem',
      border: '1px solid black',
    }}
    >
      <h2>영수증</h2>
      <section>
        <h3 style={{
          textAlign: 'center',
        }}
        >
          주문번호

        </h3>
        <p>{receipt.id}</p>
      </section>
      <section>
        <h3 style={{
          textAlign: 'center',
        }}
        >
          주문목록

        </h3>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          {receipt.menu.map((menu) => (
            <li key={menu.id}>
              {`${menu.name}(${menu.price.toLocaleString()}원)`}
            </li>
          ))}
        </ul>
      </section>
      <p>
        {`총 가격: ${receipt.totalPrice.toLocaleString()}원`}
      </p>
    </div>
  );
}

export default Receipt;
