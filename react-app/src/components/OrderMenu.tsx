import { MenuItem } from '../types/MenuItem';

type OrderProps = {
    order: MenuItem
    handleCancleMenu: (targetId: string) => void;
}
function OrderMenu({ order, handleCancleMenu }: OrderProps) {
  return (
    <li key={order.id}>
      <span>
        {order.name}
        (
        {order.price}
        )원
      </span>
      <button
        type="button"
        name={`#${order.name}`}
        onClick={() => handleCancleMenu(order.id)}
      >
        취소
      </button>
    </li>
  );
}

export default OrderMenu;
