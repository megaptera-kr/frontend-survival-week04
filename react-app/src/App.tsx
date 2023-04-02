import OrderList from './components/OrderList/OrderList';
import RestaurantList from './components/RestaurantList/RestaurantList';
import useOrders from './hooks/useOrders';
import { useRestaurants } from './hooks/useRestaurants';

export default function App() {
  const { restaurants, isLoading } = useRestaurants();
  const { orders, addOrderItem, removeOrderItem } = useOrders();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <main>
      <h1>푸드코트 키오스크</h1>
      <OrderList orders={orders} onClickRemoveOrder={removeOrderItem} />
      <RestaurantList restaurants={restaurants} onClickAddOrder={addOrderItem} />
      {/* 영수증 컴포넌트 */}
    </main>
  );
}
