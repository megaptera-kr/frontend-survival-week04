import OrderButton from './components/OrderButton';

import Menus from '../menu/components/Menus';

import useCartList from './hooks/useCartList';

export default function CartContainer() {
  const { cart } = useCartList();
  return (
    <div style={{ maxWidth: '400px', marginBottom: '50px' }}>
      <h2>
        점심 바구니
      </h2>
      <Menus menus={cart} type="cart" />
      <OrderButton />
    </div>
  );
}
