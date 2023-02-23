interface CategoryProps {
    categoryNames:string[],
    setSelectedCategory:React.Dispatch<React.SetStateAction<string>>
}

export default function CategoryButtons({ categoryNames, setSelectedCategory }:CategoryProps) {
  return (
    <ul style={{ display: 'flex', padding: 0, listStyle: 'none' }}>
      {categoryNames.map((shop) => (
        <li key={shop} style={{ marginRight: '1rem' }}>
          <button type="button" onClick={() => setSelectedCategory(shop)}>{shop}</button>
        </li>
      ))}
    </ul>
  );
}
