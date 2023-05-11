type CategoriesFilterProps = {
  categories: string[];
  setFilterCategoryText: (value: string) => void;
}

export default function CategoriesFilter({
  categories, setFilterCategoryText,
}: CategoriesFilterProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    setFilterCategoryText(button.value);
  };
  return (
    <ul style={{
      display: 'flex',
      listStyle: 'none',
    }}
    >
      {categories.map((category: string) => (
        <li
          key={category}
          style={{
            marginRight: '3rem',
          }}
        >
          <button
            type="button"
            value={category}
            onClick={handleClick}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
