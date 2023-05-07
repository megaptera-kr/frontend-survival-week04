import useWishList from '../hooks/useWishList';

export default function OrderConfirmButton() {
  const { wishList } = useWishList();

  const handleOrderClick = () => {
    console.log('ㅁㄴㅇㄻㅇㄴㄹ');
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
