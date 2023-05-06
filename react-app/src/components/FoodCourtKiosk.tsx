import FilteredRestaurantContainer from './FilteredRestaurantContainer';
import OrderMenuContainer from './OrderMenuContainer';

export default function FoodCourtKiosk() {
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <FilteredRestaurantContainer />
      <OrderMenuContainer />
    </div>
  );
}
