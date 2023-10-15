import { useInterval, useLocalStorage } from 'usehooks-ts';
// import useSelectMenu from './hook/useSelectMenu';
// import SelectMenuList from './components/SelectMenuList';
// import FilterableRestaurantTable from './components/FilterableRestaurantTable';

// import useFetchRestaurant from './hook/useFetchRestaurant';
// import ReceiptList from './components/ReceiptList';

export default function App() {

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      
      <div>
        <h2>점심 바구니</h2>
      </div>

      <div>
        <div>검색</div>
        <div>
          <table>
            <thead>
              <th>식당 이름</th>
              <th>종류</th>
              <th>메뉴</th>
            </thead>
            <tbody>
              <td>식당명1</td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}