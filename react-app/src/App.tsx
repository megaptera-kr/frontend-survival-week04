import Cart from './components/Cart';
import CategoryBar from './components/CategoryBar';
import Receipt from './components/Receipt';
import RestaurantList from './components/RestaurantList';
import SearchBar from './components/SearchBar';
import { OrderProvider } from './contexts/OrderContext';
import { RestaurantProvider } from './contexts/RestaurantContext';

export default function App() {
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <OrderProvider>
        <Cart />
        <RestaurantProvider>
          <SearchBar />
          <CategoryBar />
          <RestaurantList />
        </RestaurantProvider>
        <Receipt />
      </OrderProvider>
    </>
  );
}
