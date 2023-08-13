import CategoriesButton from './CategoriesButton';
import TextField from './TextField';

type SearchBarProps = {
  searchText: string
  setSearchText: (searchText: string) => void
  categories: string[]
  setSelectedCategory: (selectedCategory: string) => void
}

export default function SearchBar({
  searchText,
  setSearchText,
  categories,
  setSelectedCategory,
}: SearchBarProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름"
        value={searchText}
        onChange={setSearchText}
      />
      <CategoriesButton
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}
