import { useLocalStorage } from 'usehooks-ts';
import useFilteredRestaurants from '../hooks/useFilteredRestaurants';
import { RestaurantCategoryWithAll, RestaurantMenu } from '../types';
import RestaurantCategories from './RestaurantCategories';
import RestaurantTable from './RestaurantTable';
import SearchInput from './SearchInput';
import OrderBasket from './OrderBasket';
import useOrder from '../hooks/useOrder';

export default function FilterableRestaurantTable() {
  const { filteredRestaurants, restaurantFilter, setRestaurantFilter } = useFilteredRestaurants();
  const {
    basket, handleClickMenu, handleRemoveMenuFromBasket,
    handlePostOrder, isShowReceipt, totalPrice, receiptData,
  } = useOrder();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantFilter({ ...restaurantFilter, name: e.target.value });
  };

  const handleCategoryClick = (category: RestaurantCategoryWithAll) => {
    setRestaurantFilter({ ...restaurantFilter, category });
  };

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
