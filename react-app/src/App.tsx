import { useState } from 'react';
import Restaurants from './components/Restaurants';
import CategoryGroup from './components/CategoryGroup';
import SearchBar from './components/SearchBar';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import Cart from './components/Cart';

export default function App() {
  const { restaurants, categories } = useFetchRestaurants();

  const [filterText, setFilterText] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');

  const filteredRestaurants = restaurants.filter((item) => {
    const isCategoryMatch = category === '전체' || item.category === category;
    const isNameMatch = item.name.includes(filterText.trim());

    return isCategoryMatch && isNameMatch;
  });

  return (
    <>
      <h1>푸드코트 키오스크</h1>

      <Cart />
      <SearchBar setFilterText={setFilterText} />
      <CategoryGroup categories={categories} setCategory={setCategory} />
      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          <Restaurants restaurants={filteredRestaurants} />
        </tbody>
      </table>
    </>
  );
}
