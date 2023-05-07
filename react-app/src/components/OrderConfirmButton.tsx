import useWishList from '../hooks/useWishList';

export default function OrderConfirmButton() {
  const [wishList, updateWishList] = useWishList();
  return (
    <div>
      <button type="button">{`${wishList.totalPrice.toLocaleString()}원`}</button>
    </div>
  );
}
