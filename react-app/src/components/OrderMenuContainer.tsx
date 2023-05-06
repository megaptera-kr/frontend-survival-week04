import OrderConfirmButton from './OrderConfirmButton';
import OrderReceipt from './OrderReceipt';
import WishListTable from './WishListTable';

export default function OrderMenuContainer() {
  return (
    <div style={{ width: '50%', float: 'right' }}>
      <h2>주문목록</h2>
      <div>
        <p>SelectedMenuTable</p>
        <p>
          {/* 검색후 없으면
        isMenuExist()
        append. 있으면 update 메뉴 +1
        화살표 버튼 누르느냐에 따라서 달라진다. */}
        </p>
        <WishListTable />
        <OrderConfirmButton />
      </div>
      <OrderReceipt />
    </div>
  );
}
