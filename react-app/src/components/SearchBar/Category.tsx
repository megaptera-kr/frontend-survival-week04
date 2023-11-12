interface SearchBarProps {
  categories: string[]
  currentCategory: string,
  handleChange: () => void
}

function Category({ categories, currentCategory, handleChange }: SearchBarProps) {
  return (
    <ul className="category">
      {categories.map((category, categoryIndex) => (
        <li key={`category_${categoryIndex}`}>
          <button type="button" className={currentCategory === category ? 'is-active' : ''} onClick={() => handleChange(category)}>{category}</button>
        </li>
      ))}
    </ul>
  );
}

export default Category;
