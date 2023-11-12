import { useMemo } from 'react';

import { useDebounce } from 'usehooks-ts';

import Stack from './atoms/Stack';

import FilterableMenuTitle from './FilterableMenuTitle';

import FilterableMenuSearch from './FilterableMenuSearch';

import FilterableMenuFilterCategory from './FilterableMenuFilterCategory';

import FilterableMenuTable from './FilterableMenuTable';

import OutputReceipt from './OutputReceipt';

import LunchBasket from './LunchBasket';

import useInput from '../hooks/useInput';

import useFilter from '../hooks/useFilter';

import useSelectedMenus from '../hooks/useSelectedMenus';

import { RestaurantItem } from '../types/restaurantItemType';

import select from '../utils/select';

import filterByName from '../utils/filterBySearchText';

type FilterableMenuContainerProps = {
  restaurants: RestaurantItem[];
};

export default function FilterableMenuContainer({
  restaurants,
}: FilterableMenuContainerProps) {
  const { searchText, handleChangeSearchText } = useInput();

  const { filterCategory, handleClickFilterCategory } = useFilter();

  const {
    addedMenus,
    receipt,
    totalPrice,
    handleAdd,
    handleDelete,
    handleOrders,
  } = useSelectedMenus();

  const filteredRestaurants = useMemo(() => {
    let result;

    if (filterCategory === '전체') {
      result = filterByName([...restaurants], searchText);
    } else {
      result = filterByName(
        select([...restaurants], 'category', filterCategory),
        searchText,
      );
    }

    return result;
  }, [searchText, filterCategory, restaurants]);

  const debouncedFilteredRestaurants = useDebounce(filteredRestaurants, 200);

  return (
    <Stack type="column" id="filterable-menu-container">
      <FilterableMenuTitle title="푸드코트 키오스크" />
      <LunchBasket
        title="점심 바구니"
        addedMenus={addedMenus}
        price={totalPrice}
        handleDelete={handleDelete}
        handleOrders={handleOrders}
      />
      <FilterableMenuSearch
        htmlFor="input-검색"
        placeholder="식당 이름"
        searchText={searchText}
        handleChangeSearchText={handleChangeSearchText}
      />
      <FilterableMenuFilterCategory
        handleClickFilterCategory={handleClickFilterCategory}
      />
      <FilterableMenuTable
        restaurants={debouncedFilteredRestaurants}
        handleAdd={handleAdd}
      />
      <OutputReceipt receipt={receipt} />
    </Stack>
  );
}
