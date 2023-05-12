import { useState } from 'react';

type CategoriesProps ={
  categories : string,
  setFilterCategory : (value:string) =>void
}

export default function Categories({ categories, setFilterCategory }:CategoriesProps) {
  function handleCategory() {
    setFilterCategory(categories);
  }
  return (
    <button type="button" onClick={handleCategory}>{categories}</button>
  );
}
