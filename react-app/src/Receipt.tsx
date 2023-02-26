export default function Receipt({ receipt }: any) {
  if (receipt) {
    return (
      <div>
        <div>
          <h3>주문번호</h3>
          <p>
            {receipt.id}
          </p>
        </div>
        <div>
          <p>
            {`총 가격: ${receipt?.totalPrice.toLocaleString()}원`}
          </p>
        </div>
      </div>
    );
  }
  return <p>영수증 나오는 곳</p>;
}
