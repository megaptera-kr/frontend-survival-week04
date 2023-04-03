import OrderButton from './OrderButton';
import Menu from '../types/Menu';

interface CartProps {
    cart: Menu[];
    onDeleteCart: (id: string) => void;
    onReceipt: any;
}

export default function Cart({
  cart, onDeleteCart, onReceipt,
}: CartProps) {
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const handleCreateReceipt = async () => {
    onReceipt({ menu: cart, totalPrice });
  };

  return (
    <>
      <h2>🛒 점심 바구니</h2>
      {
        cart.length > 0
          ? (
            <ul style={{ listStyle: 'none' }}>
              {cart.map((cartItem) => (
                <li key={cartItem.id}>
                  <span style={{ width: 180, marginRight: 20, display: 'inline-block' }}>
                    {cartItem.name}
                    (
                    {(cartItem.price).toLocaleString('ko-kr')}
                    원)
                  </span>
                  <button
                    type="button"
                    onClick={() => onDeleteCart(cartItem.id)}
                  >
                    취소
                  </button>
                </li>
              ))}
            </ul>
          )
          : (
            <div style={{ marginTop: 20, marginBottom: 20 }}>바구니가 비어있습니다.</div>
          )
      }
      <OrderButton
        totalPrice={totalPrice}
        onCreateReceipt={handleCreateReceipt}
      />
    </>
  );
}
