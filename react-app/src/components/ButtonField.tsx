export default function ButtonField() {
  const categories = ['전체', '중식', '한식', '일식'];

  return (
    <ul style={{ padding: 0 }}>
      <li style={{ listStyle: 'none' }}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            style={{ marginRight: 15 }}
          >
            {category}
          </button>
        ))}
      </li>
    </ul>
  );
}
