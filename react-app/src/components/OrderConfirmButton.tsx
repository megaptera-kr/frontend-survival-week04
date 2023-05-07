import useWishList from '../hooks/useWishList';

export default function OrderConfirmButton() {
  const { wishList } = useWishList();
  return (
    <div>
      <button type="button">{`합계: ${wishList.totalPrice.toLocaleString()}원 주문`}</button>
    </div>
  );
}
