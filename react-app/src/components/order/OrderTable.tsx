import { useLocalStorage } from 'usehooks-ts';
import usePostOrder from '../../hooks/usePostOrder';
import Menu from '../../types/Menu';
import { Order } from '../../types/Order';
import Receipt from '../../types/Receipt';
import { reduceOrders } from '../../utils/orderUtils';

type OrderTableProps = {
  order: Order;
  orderMenu: Menu[];
  setReceipt: (arg: Receipt) => void;
};

export default function OrderTable({
  order,
  orderMenu,
  setReceipt,
}: OrderTableProps) {
  const { postOrder } = usePostOrder();

  const [localOrder, setLocalOrder] = useLocalStorage('order', {} as Order);

  const handleClickOrder = async () => {
    setLocalOrder({
      menu: order.menu,
      totalPrice: order.menu?.reduce((acc, m) => m.price + acc, 0),
    });
    const resReceipt = await postOrder(order);
    setReceipt(resReceipt);
  };

  const result = reduceOrders(orderMenu);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>품명</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {result?.map((r: Menu, i: number) => (
            <tr key={r.id}>
              <td>{i + 1}</td>
              <td>{r.name}</td>
              <td>{orderMenu.filter((o) => o.name === r.name).length}</td>
              <td>
                <span>{r.price.toLocaleString()}</span>
                <span>원</span>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3} />
            <td>
              <span>
                {orderMenu
                  .reduce((acc, o) => o.price + acc, 0)
                  .toLocaleString()}
              </span>
              <span>원</span>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={handleClickOrder}>
        합계:
        {' '}
        {orderMenu.reduce((acc, o) => o.price + acc, 0).toLocaleString()}
        원 주문
      </button>
    </div>
  );
}
