type FilterButtonFieldProps = {
    categories: string[]
    filterCategory: string
    setFilterCategory: (value: string)=>void

};

export default function FilterButtonField({
  categories,
  filterCategory,
  setFilterCategory,
}:FilterButtonFieldProps) {
  const handleClick = (category:string) => {
    setFilterCategory(category);
  };

  return (
    <ul style={{ display: 'flex', padding: '0px', listStyle: 'none' }}>
      {categories.map((category) => (
        <li key={category} style={{ marginRight: '1rem' }}>
          <button
            type="button"
            onClick={() => handleClick(category)}
            value={filterCategory}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
