type CategoriesButton = {
  categories: string[]
  setSelectedCategory: (selectedCategory: string) => void
}

export default function CategoriesButton({ categories, setSelectedCategory }: CategoriesButton) {
  return (
    <ul
      style={{
        display: 'flex',
        padding: '0px',
        listStyle: 'none',
      }}
    >
      {categories.map((category) => (
        <li
          key={category}
          style={{
            marginRight: '1rem',
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
