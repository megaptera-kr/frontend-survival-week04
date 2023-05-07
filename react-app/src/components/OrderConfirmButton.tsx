import useOrderReceipt from '../hooks/useOrderReceipt';
import useWishList from '../hooks/useWishList';

export default function OrderConfirmButton() {
  const { wishList, clearWishlist } = useWishList();
  const { fetchOrderReceipt } = useOrderReceipt();

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
