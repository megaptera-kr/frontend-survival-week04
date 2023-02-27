import Menu from '../types/Menu';
import ReceiptData from '../types/ReceiptData';

type OrderSheetProps = {
  setReceiptData: (value:ReceiptData) => void;
  cart: Menu[];
  setCart: (value:Menu[]) => void;
}

export default function OrderSheet({ setReceiptData, cart, setCart } : OrderSheetProps) {
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

  const handleClick = async () => {
    const url = 'http://localhost:9000/orders';
    const data = await (await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        menu: cart,
        totalPrice,
      }),
    })).json();
    setReceiptData(data);
    setCart([]);
  };

  return (
    <>
      <h3>점심 바구니</h3>
      <ul>
        {cart.map((menu) => (
          <li key={menu.id}>
            {menu.name}
            (
            {menu.price.toLocaleString()}
            원)
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleClick}>
        합계:
        {' '}
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </>
  );
}
