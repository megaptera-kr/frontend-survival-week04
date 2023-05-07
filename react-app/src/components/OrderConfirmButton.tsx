import useWishList from '../hooks/useWishList';

export default function OrderConfirmButton() {
  const { wishList } = useWishList();
  return (
    <div>
      <button type="button">{`${wishList.totalPrice.toLocaleString()}원`}</button>
    </div>
  );
}
