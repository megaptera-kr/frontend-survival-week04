import MenuSearchBar from './MenuSearchBar';
import MenuTable from './MenuTable';
import OrderBox from './OrderBox';
import Receipt from './Receipt';

function Kiosk() {
  return (
    <div className='kiosk-container'>
      <h1>푸드코트 키오스크</h1>
      <div>
        <OrderBox />
        <MenuSearchBar />
        <MenuTable />
        <Receipt />
      </div>
    </div>
  );
}

export default Kiosk;
