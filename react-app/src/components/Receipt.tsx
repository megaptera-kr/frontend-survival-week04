import { TReceipt } from '../types/receipt';
import Food from './RestaurantsTable/Food';

const receiptListStyle = {
  listStyle: 'none',
  padding: '0',
};

function Receipt({ receipt }: { receipt: TReceipt }) {
  if (!receipt.id) {
    return <p>[영수증 나오는 곳]</p>;
  }

  const { id, menu, totalPrice } = receipt;

  return (
    <div style={{
      width: '50%',
      border: '1px solid black',
      textAlign: 'center',
    }}
    >
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <div>
          {id}
        </div>
      </div>
      <div>
        <h3>주문목록</h3>
        <ul style={receiptListStyle}>
          {
            menu.map((food, idx) => {
              const key = `${id}-${idx}`;
              return (
                <Food key={key} food={food} />
              );
            })
          }
        </ul>
      </div>
      <div>
        총가격:
        {' '}
        {totalPrice}
        원
      </div>

    </div>
  );
}

export default Receipt;
