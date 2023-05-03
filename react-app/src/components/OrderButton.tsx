interface OrderButtonProps {
    totalPrice: number;
    onCreateReceipt: () => void
}

export default function OrderButton({ totalPrice, onCreateReceipt }: OrderButtonProps) {
  return (
    <div style={{ marginBottom: 50 }}>
      <button
        type="button"
        onClick={onCreateReceipt}
      >
        합계:
        {' '}
        {(totalPrice).toLocaleString('ko-kr')}
        원 주문
      </button>
    </div>
  );
}
