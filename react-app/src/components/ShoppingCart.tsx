import useAddProductToCart from '../hooks/useAddProductToCart';
import useFetchOrders from '../hooks/useFetchOrders';
import { ResOrders } from '../types/restaurants';

type ShoppingCartPrpos = {
  setOrders: (value: ResOrders) => void;
}

export default function ShoppingCart({ setOrders }: ShoppingCartPrpos) {
  const { cart, setCart } = useAddProductToCart();
  const sendPostRequest = useFetchOrders();

  const handleClickCancel = (foodIdx: number) => {
    setCart((prevCart) => {
      const filterdCart = prevCart.menu.filter((food, idx) => idx !== foodIdx && food);
      const selecetdFoodPrice = prevCart.menu[foodIdx].price;
      return { menu: filterdCart, totalPrice: prevCart.totalPrice - selecetdFoodPrice };
    });
  };

  const handleClickOrders = async () => {
    if (!cart.menu.length) return;
    setCart({ menu: [], totalPrice: 0 });
    const response = await sendPostRequest('http://localhost:3000/orders', cart);
    setOrders(response);
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>점심 바구니</h2>
      {cart.menu.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, width: '15rem' }}>
          {cart.menu.map((food, idx) => (
            <li
              key={food.id}
              style={{
                marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
            >
              <span>{`${food.name}(${food.price.toLocaleString()}원)`}</span>
              <button type="button" style={{ marginLeft: 'auto' }} onClick={() => handleClickCancel(idx)}>취소</button>
            </li>
          ))}
        </ul>
      )}
      <button type="button" onClick={handleClickOrders}>{`합계: ${cart.totalPrice.toLocaleString()}원 주문`}</button>
    </div>
  );
}
