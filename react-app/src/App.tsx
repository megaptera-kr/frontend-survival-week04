import { useFetch } from 'usehooks-ts';

export default function App() {
  const { data, error } = useFetch('http://localhost:3000/restaurants');
  console.log(data);
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      {/* 주문서 파트 */}
      <div style={{ marginBottom: '3rem' }}>
        <h2>점심 바구니</h2>
        {/* <p>뭔가 있을거임</p> */}
        <button>합계: 0원 주문</button>
      </div>
      {/* 검색 파트 */}
      <div>
        <label style={{ paddingRight: '1rem' }}>검색</label>
        <input type="text" placeholder="식당 이름" />
        <ul style={{ display: 'flex', padding: '0px', listStyle: 'none' }}>
          <li style={{ marginRight: '1rem' }}>
            <button type="button">전체</button>
          </li>
          <li style={{ marginRight: '1rem' }}>
            <button type="button">한식</button>
          </li>
          <li style={{ marginRight: '1rem' }}>
            <button type="button">일식</button>
          </li>
          <li style={{ marginRight: '1rem' }}>
            <button type="button">중식</button>
          </li>
        </ul>
      </div>
      {/* 테이블 파트 */}
      <div>
        <table>
          <thead>
            <tr>
              <th style={{ paddingInline: '2rem' }}>식당 이름</th>
              <th>종류</th>
              <th>메뉴</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
