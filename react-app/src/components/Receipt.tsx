import { Order } from '../types';

type Props = {
  receipt: Order;
}

export default function Receipt({ receipt }:Props) {
  return (
    <div className="w-full flex flex-col justify-center
    items-center mt-6 border-2 border-purple-400 py-4 px-8"
    >
      <h3 className="font-bold text-3xl my-6">영수증</h3>
      <h4 className="font-bold text-xl">주문번호</h4>
      <p className="font-semibold text-lg text-purple-600 py-2">{receipt.id}</p>
      <h4 className="font-bold text-xl">주문목록</h4>
      <ul className="py-2">
        {receipt.menu.map((menu) => (
          <li key={menu.id}>
            <div className="font-semibold text-lg text-purple-600 text-center">
              {menu.name}
              (
              {menu.price.toLocaleString()}
              원)
            </div>
          </li>
        ))}
      </ul>
      <p className="font-bold text-xl text-purple-600 py-5">
        총 가격:
        {' '}
        {receipt.totalPrice.toLocaleString()}
        원
      </p>
    </div>
  );
}
