function MenuTable() {
  return (
    <div className='menu-table'>
      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>메가반점</td>
            <td>중식</td>
            <td>
              <ul>
                <li>
                  <span>짜장면(8,000)</span>
                  <button type='button'>선택</button>
                </li>
                <li>
                  <span>짬뽕(8,000)</span>
                  <button type='button'>선택</button>
                </li>
                <li>
                  <span>차돌짬뽕(9,000원)</span>
                  <button type='button'>선택</button>
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
                  <button type='button'>선택</button>
                </li>
                <li>
                  <span>참치김밥(4,500원)</span>
                  <button type='button'>선택</button>
                </li>
                <li>
                  <span>제육김밥(5,000원)</span>
                  <button type='button'>선택</button>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MenuTable;
