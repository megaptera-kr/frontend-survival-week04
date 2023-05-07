import useOrderReceipt from '../hooks/useOrderReceipt';
import useWishList from '../hooks/useWishList';
import aggregateMenu from '../utils/aggregateMenu';
import OrderConfirmButton from './OrderConfirmButton';
import OrderReceipt from './OrderReceipt';
import WishListTable from './WishListTable';

export default function OrderMenuContainer() {
  const { wishList, isWishListEmpty } = useWishList();

  const menuList = aggregateMenu(wishList.menu);
  const { orderReceipt } = useOrderReceipt();
  const receiptMenuList = aggregateMenu(orderReceipt.menu);

  return (
    <div style={{ width: '50%', float: 'right' }}>
      <h2>주문목록</h2>
      { isWishListEmpty() ? (<div />) : (
        <div>
          <WishListTable menuList={menuList} />
          <OrderConfirmButton />
        </div>
      )}
      {orderReceipt.id ? (<OrderReceipt menuList={receiptMenuList} />) : (<div />)}
    </div>
  );
}
