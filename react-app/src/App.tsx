const fetchRestaurants = async () => {
  const url = 'http://localhost:3000/restaurants';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  const { restaurants } = data;

  return restaurants;
};

export default function App() {
  const restaurants = fetchRestaurants();

  return (
    <div className="app">
      <h1>푸드코드 키오스크</h1>
      <div className="filterable-restaurant-table">
        <div className="search-bar">
          <div className="input-bar">
            <label htmlFor="only-stock">검색</label>
            <input placeholder="식당 이름" id="only-stock" />
          </div>
          <div className="select-category">
            <button type="button">전체</button>
            <button type="button">중식</button>
            <button type="button">한식</button>
            <button type="button">일식</button>
          </div>
        </div>
        <table className="restaurant-table">
          <thead className="restaurant-head">
            <tr>
              <th>식당 이름</th>
              <th>종류</th>
              <th>메뉴</th>
            </tr>
          </thead>
          <tbody className="restaurant-body">
            <tr>
              <td className="restaurant-name-row">메가반점</td>
              <td className="restaurant-category-row">중식</td>
              <ul className="restaurant-menu-row">
                <li>
                  <span>짜장면(8,000원)</span>
                  <button type="button">선택</button>
                </li>
                <li>
                  <span>짜장면(8,000원)</span>
                  <button type="button">선택</button>
                </li>
              </ul>
            </tr>
            <tr>
              <td className="restaurant-name-row">메가반점</td>
              <td className="restaurant-category-row">중식</td>
              <ul className="restaurant-menu-row">
                <li>
                  <span>짜장면(8,000원)</span>
                  <button type="button">선택</button>
                </li>
                <li>
                  <span>짜장면(8,000원)</span>
                  <button type="button">선택</button>
                </li>
              </ul>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="shopping-cart">
        <h2>점심 바구니</h2>
        <ul className="cart-items">
          <li className="cart-item">
            <span>짜장면(8,000원)</span>
            <button type="button">취소</button>
          </li>
        </ul>
        <button className="order-button" type="button">합계: 0원 주문</button>
      </div>
      <div className="receipt">
        <h2 className="receipt-header">영수증</h2>
        <div className="receipt-order-number">
          <h3>주문번호</h3>
          <p>12345678</p>
        </div>
        <div className="receipt-order-list">
          <h3>주문목록</h3>
          <ul className="receipt-items">
            <li className="receipt-item">
              <span>짜장면(8,000원)</span>
            </li>
          </ul>
        </div>
        <p className="receipt-total">총 가격: 33,000원</p>
      </div>
    </div>
  );
}
