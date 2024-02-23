import { useEffect, useState } from 'react';

import MenuSearchBar from './MenuSearchBar';
import MenuTable from './MenuTable';
import OrderBox from './OrderBox';
import Receipt from './Receipt';

function Kiosk() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = 'http://localhost:3000/restaurants';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchProducts();
  }, []);

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
