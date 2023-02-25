type CategoryRowProps = {
  category: string
  setFilterCategory: (text: string)=>void;
}

export default function CategoryRow({
  category,
  setFilterCategory,
}: CategoryRowProps) {
  return (
    <li style={{ marginRight: '1rem' }}>
      <button
        type="button"
        onClick={() => { setFilterCategory(category); }}
      >
        {category}

      </button>
    </li>
  );
}
