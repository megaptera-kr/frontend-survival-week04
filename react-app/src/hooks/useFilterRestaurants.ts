import { useState } from 'react';

import type { KioskFilter } from '../types/kiosk';

interface UseFilterRestaurants {
  filter: KioskFilter,
  handleChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function useFilterRestaurants(): UseFilterRestaurants {
  const [filter, setFilter] = useState<KioskFilter>({
    searchText: '',
    category: '전체',
  });

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return { filter, handleChangeFilter };
}
