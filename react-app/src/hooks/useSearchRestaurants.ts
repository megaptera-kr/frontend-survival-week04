import { useState } from 'react';

function useSearchRestaurants() {
  const [searchRestaurantName, setSearchRestaurantName] = useState<string>('');
  const [searchCategoryName, setSearchCategoryName] = useState<string>('');

  const handleSearchRestaurantName = (value: string) => {
    setSearchRestaurantName(value.trim());
  };

  const handleSearchCategoryName = (value: string) => {
    setSearchCategoryName(value);
  };

  return {
    searchRestaurantName,
    searchCategoryName,
    handleSearchRestaurantName,
    handleSearchCategoryName,
  };
}

export default useSearchRestaurants;
