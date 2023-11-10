import React, { useState } from 'react';

import { CategoryType } from '../types/categoryType';

import isCategoryType from '../utils/isCategoryType';

export default function useFilter() {
  const [filterCategory, setFilterCategory] = useState<CategoryType>('전체');

  const handleClickFilterCategory = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const { value } = e.currentTarget;

    if (value !== filterCategory && isCategoryType(value)) {
      setFilterCategory(value);
    }
  };

  return {
    filterCategory,
    handleClickFilterCategory,
  };
}
