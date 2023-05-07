import { useInterval } from 'usehooks-ts';
import useOrderReceipt from '../hooks/useOrderReceipt';
import useWishList from '../hooks/useWishList';

export default function OrderConfirmButton() {
  const { wishList, clearWishlist, updateWishList } = useWishList();
  const { orderReceipt, fetchOrderReceipt } = useOrderReceipt();

  const handleOrderClick = () => {
    fetchOrderReceipt(wishList);
    clearWishlist();
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOrderClick}
      >
        {`합계: ${wishList.totalPrice.toLocaleString()}원 주문`}

      </button>
    </div>
  );
}
