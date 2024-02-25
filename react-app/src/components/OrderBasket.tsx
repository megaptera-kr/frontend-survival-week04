import { Order } from '../types/order';
import Receipt from './Receipt';

interface OrderBasketProps {
  basket: { id: string; name: string; price: number }[];
  handleRemoveMenuFromBasket: (id: string)=> void
  isShowReceipt: boolean
  handlePostOrder: () => Promise<void>
  totalPrice: number
  receiptData: Order | null
}

export default function OrderBasket({
  basket, handleRemoveMenuFromBasket, isShowReceipt, handlePostOrder, totalPrice, receiptData,
}: OrderBasketProps) {
  return (
    <>
      <section>
        <h2>점심 바구니</h2>
        <ol>
          {basket.map(({ id, name, price }) => (
            <li
              key={id}
              style={{
                width: '200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
            >
              <p style={{ textAlign: 'center' }}>
                {name}
                {' '}
                (
                {price.toLocaleString()}
                원)
              </p>
              <button type="button" onClick={() => handleRemoveMenuFromBasket(id)}>취소</button>
            </li>
          ))}
        </ol>
        <button type="button" onClick={handlePostOrder}>
          합계:
          {' '}
          {totalPrice.toLocaleString()}
          원 주문
        </button>
      </section>
      {isShowReceipt
        ? (
          <Receipt receiptData={receiptData} />
        ) : <p style={{ color: 'white' }}>영수증 나오는 곳</p>}
    </>
  );
}
