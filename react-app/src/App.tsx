import './App.css';

import OrderBox from './component/OrderBox';
import MenuSearchBar from './component/MenuSearchBar';
import MenuTable from './component/MenuTable';
import Receipt from './component/Receipt';

export default function App() {
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <div className='container'>
        <OrderBox />
        <MenuSearchBar />
        <MenuTable />
        <Receipt />
      </div>
    </div>
  );
}
