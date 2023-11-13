interface SearchBarProps {
  categories: string[]
  currentCategory: string,
  handleCategoryChange: (category: string) => void
}

function Category({ categories, currentCategory, handleCategoryChange }: SearchBarProps) {
  return (
    <ul className="category">
      {categories.map((category) => (
        <li key={category}>
          <button type="button" className={currentCategory === category ? 'is-active' : ''} onClick={() => handleCategoryChange(category)}>{category}</button>
        </li>
      ))}
    </ul>
  );
}

export default Category;
