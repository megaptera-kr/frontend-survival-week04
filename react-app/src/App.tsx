import './App.css';

import OrderBox from './component/OrderBox';
import MenuSearchBar from './component/MenuSearchBar';
import MenuTable from './component/MenuTable';

export default function App() {
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <div className='container'>
        <OrderBox />
        <MenuSearchBar />
        <MenuTable />

        <div>
          <p>[영수증 나오는 곳]</p>
        </div>
      </div>
    </div>
  );
}
