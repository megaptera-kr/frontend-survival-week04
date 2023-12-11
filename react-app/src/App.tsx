import { useFetch, useLocalStorage } from 'usehooks-ts';
import { useState } from 'react';

import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import SearchBar from './components/SearchBar';
import filterRestaurants from './utils/filterRestaurants';
import RestaurantFetchResult from './types/RestaurantFetchResult';
import Menu from './types/Menu';
import makeOrder from './utils/makeOrder';
import Cart from './components/Cart';
import ReceiptPrinter from './components/ReceiptPrinter';

export default function App() {
  const { data } = useFetch<RestaurantFetchResult>('http://localhost:3000/restaurants');
  const restaurants = data?.restaurants || [];

  // 검색어
  const [filterText, setFilterText] = useState<string>('');

  // 카테고리
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurants(
    restaurants,
    { filterText, filterCategory },
  );
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);
  const order = makeOrder(cart);

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      {/* 주문서 */}
      <Cart
        order={order}
        cart={cart}
        setCart={setCart}
      />
      {/* 검색 파트 */}
      <SearchBar
        restaurants={restaurants}
        filterText={filterText}
        setFilterText={setFilterText}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      {/* 테이블 파트 */}
      <FilterableRestaurantsTable
        restaurants={filteredRestaurants}
        cart={cart}
        setCart={setCart}
      />
      {/* 영수증 파트 */}
      <ReceiptPrinter />
    </>
  );
}
