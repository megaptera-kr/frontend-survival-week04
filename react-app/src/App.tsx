import './App.css';

export default function App() {
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <div>
        <h2>점심바구니</h2>
        <div>
          <span>짜장면(8,000원)</span>
          <button type='button'>취소</button>
        </div>
        <button>합계: 0원 주문</button>
      </div>
      <br />
      <br />

      <div className='container'>
        <div className='searchbar'>
          <label htmlFor='input-search'>검색</label>
          <input type='text' id='input-search' placeholder='식당 이름' />

          <div className='category'>
            <ul className='category-ul'>
              <li className='category-li'>
                <button>전체</button>
              </li>
              <li className='category-li'>
                <button>중식</button>
              </li>
              <li className='category-li'>
                <button>한식</button>
              </li>
              <li className='category-li'>
                <button>일식</button>
              </li>
            </ul>
          </div>
        </div>

        <div className='menu-table'>
          <table>
            <thead>
              <th>식당 이름</th>
              <th>종류</th>
              <th>메뉴</th>
            </thead>
            <tbody>
              <tr>
                <td>메가반점</td>
                <td>중식</td>
                <td>
                  <ul>
                    <li>
                      <span>짜장면(8,000)</span>
                      <button>선택</button>
                    </li>
                    <li>
                      <span>짬뽕(8,000)</span>
                      <button>선택</button>
                    </li>
                    <li>
                      <span>차돌짬뽕(9,000원)</span>
                      <button>선택</button>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>메리김밥</td>
                <td>한식</td>
                <td>
                  <ul>
                    <li>
                      <span>김밥(3,500원)</span>
                      <button>선택</button>
                    </li>
                    <li>
                      <span>참치김밥(4,500원)</span>
                      <button>선택</button>
                    </li>
                    <li>
                      <span>제육김밥(5,000원)</span>
                      <button>선택</button>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <p>[영수증 나오는 곳]</p>
        </div>
      </div>
    </div>
  );
}
