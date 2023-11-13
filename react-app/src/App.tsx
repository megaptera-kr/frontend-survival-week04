import Cart from "./containers/Cart";
import Receipt from "./containers/Receipt";
import Restaurants from "./containers/Restaurant";

export default function App() {
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart />
      <Restaurants />
      <p>[영수증 나오는 곳]</p>
      <Receipt />
    </div>
  );
}
