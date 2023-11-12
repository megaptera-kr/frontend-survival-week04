import { useMemo } from 'react';
import { ReceiptType } from '../types/receiptType';
import Stack from './atoms/Stack';

type OutputReceiptProps = {
  receipt: ReceiptType;
};

export default function OutputReceipt({ receipt }: OutputReceiptProps) {
  const isExistedReceipt = useMemo(
    () => !!receipt?.id && receipt?.menu && !!receipt?.totalPrice,
    [receipt],
  );

  const { id, menu, totalPrice } = receipt;

  return (
    <Stack type="column" id="receipt-wrraper">
      {isExistedReceipt ? (
        <Stack type="column" id="receipt">
          <h2>영수증</h2>
          <Stack type="column" id="receipt-id">
            <h3>주문번호</h3>
            <p>{id}</p>
          </Stack>
          <Stack type="column" id="receipt-menus">
            <h3>주문목록</h3>
            {menu?.map((item) => (
              <p key={Math.random()}>
                {item.name}
                (
                {item.price.toLocaleString()}
                원)
              </p>
            ))}
          </Stack>
          <p>
            총 가격:
            {totalPrice?.toLocaleString()}
            원
          </p>
        </Stack>
      ) : (
        <h2>[영수증 나오는 곳]</h2>
      )}
    </Stack>
  );
}
