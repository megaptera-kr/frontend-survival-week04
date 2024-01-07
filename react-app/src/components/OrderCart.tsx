import { MenuItem } from '../types/MenuItem';
import { Receipt } from '../types/Receipt';
import { Order } from '../types/Order';
import OrderMenu from './OrderMenu';

type OrderCartProps = {
  orders: MenuItem[];
  totalPrice: number;
  setOrders: (order: MenuItem[]) => void;
  setReceipt: (item: Receipt) => void;
};

function OrderCart({
  orders,
  totalPrice,
  setOrders,
  setReceipt,
}: OrderCartProps) {
  const handleCancleMenu = (targetId: string) => {
    const filterOrder = orders.filter((order) => order.id !== targetId);
    setOrders(filterOrder);
  };

  const handleConfirmOder = () => {
    setTimeout(() => {
      setReceipt({
        id: '',
        totalPrice: 0,
        menu: [],
      });
    }, 5000);
  };

  const handleOrder = async () => {
    const newOrder: Order = {
      menu: orders,
      totalPrice,
    };
    const url = 'http://localhost:3000/orders';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        const data = await response.json();
        setReceipt(data);
        setOrders([]);
        handleConfirmOder();
      }
    } catch (error) {
      throw new Error('에러발생');
    }
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      <ul>
        {orders?.map((order) => (
          <OrderMenu
            key={order.id}
            order={order}
            handleCancleMenu={handleCancleMenu}
          />
        ))}
      </ul>
      <button type="button" onClick={handleOrder}>
        합계:
        {' '}
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}

export default OrderCart;
