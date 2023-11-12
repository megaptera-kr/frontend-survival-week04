import { Menu, Receipt, SetValue } from '../types';

type Props = {
    cart : Menu[],
    setCart: SetValue<Menu[]>
    setReceipt :SetValue<Receipt | null>
}

function Cart({ cart, setCart, setReceipt } :Props) {
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

  const createOrder = async () => {
    const url = 'http://localhost:3000/orders';
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        menu: cart,
        totalPrice,
      }),
    }).then((response) => response.json())
      .then((result) => setReceipt(result));
  };

  const handleOrderClick = () => {
    createOrder();
    setCart([]);
  };

  const handleDeleteMenu = (index : number) => {
    const beforeIndex = cart?.slice(0, index) || []; // 앞부분
    const afterIndex = cart?.slice(index + 1) || []; // 뒷부분
    setCart([...beforeIndex, ...afterIndex]);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>점심 바구니</h2>
      <ul>
        {cart?.map((item, index) => (
          <li style={{ display: 'flex', gap: '20px', marginBottom: '10px' }} key={item.id}>
            <span>
              {item.name}
              (
              {item.price.toLocaleString()}
              원)

            </span>

            <button type="button" onClick={() => handleDeleteMenu(index)}>취소</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleOrderClick}>
        합계:
        {' '}
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}

export default Cart;
