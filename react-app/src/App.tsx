/* eslint-disable max-len */
import OrderList from './components/OrderList/OrderList';
import Receipt from './components/Receipt/Receipt';
import RestaurantList from './components/RestaurantList/RestaurantList';
import useOrders from './hooks/useOrders';
import useReceipt from './hooks/useReceipt';
import { useRestaurants } from './hooks/useRestaurants';
import { RequestOrderBody } from './types';

export default function App() {
  const { restaurants, isLoading } = useRestaurants();
  const {
    orders, addOrderItem, removeOrderItem, createOrderMutation, clearOrders,
  } = useOrders();
  const { receipt, setReceipt } = useReceipt();

  const handleRequestOrder = (body:RequestOrderBody) => {
    createOrderMutation.mutate(body, {
      onSuccess: async (data) => {
        const newReceipt = await data.json();
        setReceipt(newReceipt);
        clearOrders();
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  const handleRemoveReceipt = () => {
    console.log('handleRemoveReceipt');
    setReceipt(null);
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <main>
      <h1>푸드코트 키오스크</h1>
      <OrderList orders={orders} onClickRemoveOrder={removeOrderItem} onClickRequestOrder={handleRequestOrder} />
      <RestaurantList restaurants={restaurants} onClickAddOrder={addOrderItem} />
      <Receipt receipt={receipt} onRemoveReceipt={handleRemoveReceipt} />
    </main>
  );
}
