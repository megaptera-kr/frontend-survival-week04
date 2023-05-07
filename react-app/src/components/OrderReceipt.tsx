import { useInterval } from 'usehooks-ts';
import useOrderReceipt from '../hooks/useOrderReceipt';
import MenuWithCount from '../types/MenuWithCount';

type OrderReceiptProps = {
  menuList: MenuWithCount[];
}

export default function OrderReceipt({
  menuList,
}: OrderReceiptProps) {
  const { orderReceipt, clearOrderReceipt } = useOrderReceipt();

  useInterval(() => {
    clearOrderReceipt();
  }, 5_000);

  return (
    <div>
      <h2>영수증</h2>
      <h3>주문번호</h3>
      <p>{orderReceipt.id}</p>
      <h3>주문목록</h3>
      {menuList.map((menu) => (
        (<p key={menu.id}>{`${menu.name}(${menu.price.toLocaleString()}원) x ${menu.count}`}</p>)
      ))}
      <div>
        <p>{`총 가격: ${orderReceipt.totalPrice.toLocaleString()}원`}</p>
      </div>
    </div>
  );
}
