import _ from 'lodash';

import type { Receipts } from '../types/types';

export default function Receipt({ receiptList }: { receiptList: Receipts }) {
  if (_.isEmpty(receiptList)) {
    return <p>[영수증 나오는 곳]</p>;
  }
  return (
    <div className="Receipt">
      <h2>영수증</h2>
      <h3>주문번호</h3>
      <span>{receiptList.id}</span>
      <div>

        <h3>주문 목록</h3>
        <ul>
          {
            receiptList.menu?.map((el) => (
              <li key={el.id}>
                <span>
                  {el.name}
                  (
                  {el.price.toLocaleString()}
                  원)
                </span>
              </li>
            ))
          }
        </ul>
      </div>
      <h4>합계</h4>
      <span>
        {receiptList.totalPrice?.toLocaleString()}
        원
      </span>
    </div>
  );
}
