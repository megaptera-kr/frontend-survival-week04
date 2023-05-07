import useWishList from '../hooks/useWishList';
import OrderConfirmButton from './OrderConfirmButton';
import OrderReceipt from './OrderReceipt';
import WishListTable from './WishListTable';

export default function OrderMenuContainer() {
  const { isWishListEmpty } = useWishList();
  return (
    <div style={{ width: '50%', float: 'right' }}>
      <h2>주문목록</h2>
      { isWishListEmpty() ? (<div />) : (
        <div>
          <WishListTable />
          <OrderConfirmButton />
        </div>
      )}
      <OrderReceipt />
    </div>
  );
}
