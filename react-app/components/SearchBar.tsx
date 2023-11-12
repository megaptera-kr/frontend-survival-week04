import React from 'react';
import CategoryButtons from './CategoryButtons';
import TextField from './TextField';
import { Category } from '../types';

type SearchBarProps = {
    query : string,
    setQuery : React.Dispatch<React.SetStateAction<string>>;
    setCategory : React.Dispatch<React.SetStateAction<Category>>;
}

function SearchBar({ query, setQuery, setCategory }:SearchBarProps) {
  return (
    <div>
      <TextField query={query} setQuery={setQuery} />
      <CategoryButtons setCategory={setCategory} />
    </div>
  );
}

export default SearchBar;
