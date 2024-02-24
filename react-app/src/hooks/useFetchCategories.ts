import { useEffect, useState } from 'react';

import CategoryType from '../types/CategoryType';

function useFetchCategories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const url = 'http://localhost:3000/categories';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch categories data. Status: ${response.status}`,
          );
        }

        const data: CategoryType[] = await response.json();
        setCategories(data);
      } catch (error) {
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  return categories;
}

export default useFetchCategories;
