import { OrderItem, RequestOrderBody } from '../../types';

type Props = {
  orders: OrderItem[];
  onClickRemoveOrder: (id:number) => void;
  onClickRequestOrder: (body:RequestOrderBody) => void;
}

function OrderList({ orders, onClickRemoveOrder, onClickRequestOrder }: Props) {
  const totalPrice = orders.reduce((acc, order) => acc + order.price, 0);
  const displayPriceFormat = totalPrice.toLocaleString();

  return (
    <div style={{ marginBottom: '24px' }}>
      <h2>점심 바구니</h2>
      {
        orders.length > 0 && (
          <ul style={{ width: '300px', padding: 0 }}>
            {orders.map((order) => (
              <li
                key={order?.id}
                style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '8px 0',
                }}
              >
                <span>{`${order?.name}(${order?.price?.toLocaleString()}원)`}</span>
                <button type="button" onClick={() => onClickRemoveOrder(order.id)}>취소</button>
              </li>
            ))}
          </ul>
        )
      }
      <button
        type="button"
        onClick={() => onClickRequestOrder(
          {
            menu: orders.map((order) => ({
              id: order.menuId,
              name: order.name,
              price: order.price,
            })),
            totalPrice,
          },
        )}
      >
        {`합계: ${displayPriceFormat}원 주문`}
      </button>
    </div>
  );
}

export default OrderList;
