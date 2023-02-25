import FoodCourtKiosk from './components/FoodCourtKiosk';
import useFetchProducts from './hooks/useFetchProducts';

export default function App() {
  const restaurants = useFetchProducts();

  return (
    <div>
      <h1>
        푸드코트 키오스크
      </h1>
      <FoodCourtKiosk restaurants={restaurants} />
    </div>
  );
}
