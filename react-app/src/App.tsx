import './styles.css';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import FoodKiosk from './components/FoodKiosk';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div className="food-kiosk-app">
      <h1>푸트코트 키오스크</h1>
      <FoodKiosk restaurants={restaurants} />
    </div>
  );
}
