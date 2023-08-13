import priceToLocal from '../../utils/priceToLocal';
import { IReceipt } from '../types/restaurants';
import MenuListItem from './MenuListItem';

type ReceiptDetailsProps = {
  receipt: IReceipt;
}

export default function ReceiptDetails({ receipt }: ReceiptDetailsProps) {
  const { id, menu, totalPrice } = receipt;
  return (
    <div style={{
      padding: '1rem',
      border: '1px solid black',
      textAlign: 'center',
    }}
    >
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <p>{id}</p>
      </div>
      <div>
        <h3>주문목록</h3>
        <ul style={{
          listStyle: 'none',
          padding: '0px',
        }}
        >
          {
            menu.map((menuListItem, index) => {
              const keyId = `${menuListItem.id}-${index}`;
              return (
                <MenuListItem
                  key={keyId}
                  menuItem={menuListItem}
                />
              );
            })
          }
        </ul>
      </div>
      <p>{`총 가격 ${priceToLocal(totalPrice)}원`}</p>
    </div>
  );
}
