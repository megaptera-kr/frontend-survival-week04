import React, { useState } from 'react';

export default function useInput() {
  const [searchText, setSearchText] = useState('');

  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value);
  };

  return {
    searchText,
    handleChangeSearchText,
  };
}
