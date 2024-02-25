import useFilteredRestaurants from '../hooks/useFilteredRestaurants';
import { RestaurantCategoryWithAll } from '../types';
import RestaurantCategories from './RestaurantCategories';
import RestaurantTable from './RestaurantTable';

export default function FilterableRestaurantTable() {
  const { filteredRestaurants, restaurantFilter, setRestaurantFilter } = useFilteredRestaurants();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantFilter({ ...restaurantFilter, name: e.target.value });
  };

  const handleCategoryClick = (category: RestaurantCategoryWithAll) => {
    setRestaurantFilter({ ...restaurantFilter, category });
  };

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <h2>점심 바구니</h2>
      <button type="button">합계: 999원 주문</button>
      <label style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>
        검색
        <input placeholder="식당 이름" onChange={handleSearch} maxLength={20} />
      </label>
      <RestaurantCategories
        handleCategoryClick={handleCategoryClick}
        restaurantFilter={restaurantFilter}
      />
      <RestaurantTable filteredRestaurants={filteredRestaurants} />
    </>
  );
}
