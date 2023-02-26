import Searchbar from './components/Searchbar';
import './styles.css';
import { TRestaurantsResponse } from './types/restaurant';

export default function App({ restaurants }: { restaurants: TRestaurantsResponse[] }) {
  console.log(restaurants);

  return (
    <div className="food-kiosk">
      <h1>푸트코트 키오스크</h1>

      <div className="cart">
        <h2>점심 바구니</h2>
        <button type="button" className="total-button">
          합계: 0원 주문
        </button>
      </div>

      <Searchbar />

      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>

        <tbody>
          <tr />
        </tbody>
      </table>
    </div>
  );
}
