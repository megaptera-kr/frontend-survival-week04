import TextField from './TextField';

interface SearchBarProps {
  categories: string[];
  restaurantName: string;
  setRestaurantName: (value: string) => void;
  setMenuCategory: (value: string) => void;
}

export default function SearchBar({
  categories,
  restaurantName,
  setRestaurantName,
  setMenuCategory,
}: SearchBarProps) {
  return (
    <>
      <TextField
        label="검색"
        placeholder="식당 이름"
        restaurantName={restaurantName}
        setRestaurantName={setRestaurantName}
      />

      <ul style={{ display: 'flex', listStyle: 'none', padding: '0px' }}>
        {['전체', ...categories].map((category) => (
          <li key={category} style={{ marginRight: '1rem' }}>
            <button type="button" onClick={() => setMenuCategory(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
