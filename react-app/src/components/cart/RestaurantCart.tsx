import { Cart } from '../../types/cart';
import RestaurantCartList from './RestaurantCartList';

type RestaurantCartProps = {
  cart: Cart;
  setCart(value: Cart): void;
  setReceipt(value: Cart): void;
}

export default function RestaurantCart({
  cart, setCart, setReceipt,
}: RestaurantCartProps) {
  const handleClick = () => {
    const fetchOrders = async () => {
      const url = 'http://localhost:3000/orders';
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart),
      };
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      setReceipt(data);
    };

    fetchOrders();
    setCart({
      menu: [],
      totalPrice: 0,
    });
  };

  return (
    <div style={{ marginBottom: '3rem', width: '30%' }}>
      <h2>점심 바구니</h2>
      <RestaurantCartList
        cart={cart}
        setCart={setCart}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        {`합계: ${cart.totalPrice.toLocaleString('ko-kr')}원 주문`}
      </button>
    </div>
  );
}
