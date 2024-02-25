import { useLocalStorage } from 'usehooks-ts';
import useFilteredRestaurants from '../hooks/useFilteredRestaurants';
import { RestaurantCategoryWithAll, RestaurantMenu } from '../types';
import RestaurantCategories from './RestaurantCategories';
import RestaurantTable from './RestaurantTable';
import SearchInput from './SearchInput';
import OrderBasket from './OrderBasket';
import useOrder from '../hooks/useOrder';

export default function FilterableRestaurantTable() {
  const {
    filteredRestaurants, restaurantFilter, handleCategoryClick, handleSearch,
  } = useFilteredRestaurants();
  const {
    basket, handleClickMenu, handleRemoveMenuFromBasket,
    handlePostOrder, isShowReceipt, totalPrice, receiptData,
  } = useOrder();

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <OrderBasket
        basket={basket}
        handleRemoveMenuFromBasket={handleRemoveMenuFromBasket}
        handlePostOrder={handlePostOrder}
        isShowReceipt={isShowReceipt}
        totalPrice={totalPrice}
        receiptData={receiptData}
      />
      <SearchInput handleSearch={handleSearch} />
      <RestaurantCategories
        handleCategoryClick={handleCategoryClick}
        restaurantFilter={restaurantFilter}
      />
      <RestaurantTable
        filteredRestaurants={filteredRestaurants}
        handleClickMenu={handleClickMenu}
      />

    </>
  );
}
