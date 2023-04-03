export default function Receipt() {
  return (
    <>
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        [🧾 영수증 나오는 곳]
      </div>
      <div style={{
        width: 500,
        border: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        padding: 30,
        boxSizing: 'border-box',
      }}
      >
        <h2 style={{ margin: 0 }}>영수증</h2>
        <h3>주문번호</h3>
        1680525641752

        <h3>주문목록</h3>
        <div>참치김밥(4,500원)</div>
        <div>총 가격: 4,500원</div>
      </div>
    </>
  );
}
