import Searchbar from './components/Searchbar';
import './styles.css';
import { TRestaurantsResponse } from './types/restaurant';
import RestaurantsTable from './components/RestaurantsTable';
import Cart from './components/Cart';

export default function App({ restaurants }: { restaurants: TRestaurantsResponse[] }) {
  return (
    <div className="food-kiosk">
      <h1>푸트코트 키오스크</h1>
      <Cart />
      <Searchbar />
      <RestaurantsTable restaurants={restaurants} />
    </div>
  );
}
