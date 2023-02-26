import './styles.css';
import { TRestaurantsResponse } from './types/restaurant';
import FilterableRestaurantsTable
  from './components/FilterableRestaurantsTable';

export default function App({ restaurants }: { restaurants: TRestaurantsResponse[] }) {
  return (
    <div className="food-kiosk">
      <h1>푸트코트 키오스크</h1>
      <FilterableRestaurantsTable restaurants={restaurants} />
    </div>
  );
}
