import { ReceiptType } from '../types/restaurants';
import Menu from './Menu';

export default function Receipt({ receipt }: { receipt?: ReceiptType }) {
  return (
    <div>
      <h3>[영수증 나오는 곳]</h3>
      {receipt && (
        <div style={{ textAlign: 'center' }}>
          <p>주문번호</p>
          <p>{receipt?.id}</p>
          <p>주문목록</p>
          <ul>
            {receipt?.menu.map((menu, index) => (
              <Menu menu={menu} key={`${menu.id}_${index}`} />
            ))}
          </ul>
          <p>
            총 가격:
            {receipt?.totalPrice.toLocaleString()}
            원
          </p>
        </div>
      )}
    </div>
  );
}
