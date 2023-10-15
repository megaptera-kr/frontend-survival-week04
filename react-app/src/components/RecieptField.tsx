import { OrderType } from '../types/Order';

type RecieptFieldProps = {
  order: OrderType
}

export default function RecieptField({
  order,
}: RecieptFieldProps) {
  return (
    <div
      style={{
        width: '50%',
        border: '1px solid black',
        textAlign: 'center',
      }}
    >
      <h2>영수증</h2>
      <h3>주문번호</h3>
      <p>{order.id}</p>
      <h3>주문목록</h3>
      <ul
        style={{
          padding: '0px',
          listStyle: 'none',
        }}
      >
        {
          order?.menu.map((menuItem, idx) => (
            <li
              key={`order-${menuItem.name}`}
              style={{
                display: 'flex',
                paddingBlock: '0.5rem',
              }}
            >
              <span
                style={{
                  margin: '0 auto',
                }}
              >
                {menuItem.name}
                {' '}
                (
                {menuItem.price.toLocaleString()}
                원)
              </span>
            </li>
          ))
        }
        <li
          style={{
            display: 'flex',
            paddingBlock: '0.5rem',
          }}
        >
          <span
            style={{
              margin: '0 auto',
            }}
          >
            총 가격:
            {' '}
            {Number(order.totalPrice).toLocaleString()}
            원
          </span>
        </li>
      </ul>
    </div>
  );
}
