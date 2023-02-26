import { useState } from 'react';

const useFilter = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('');
  return {
    searchTerm, setSearchTerm, searchCategory, setSearchCategory,
  };
};

export default useFilter;
