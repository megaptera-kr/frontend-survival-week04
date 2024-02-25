interface RestaurantMenuRowProps {
  name: string;
  price: number;
}

export default function RestaurantMenuRow({ name, price }:RestaurantMenuRowProps) {
  return (
    <ul
      style={{
        display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '1rem',
      }}
    >
      <li style={{ listStyle: 'none', textAlign: 'center' }}>
        {name}
        (
        {price}
        원)
      </li>
      <button type="button">선택</button>
    </ul>
  );
}
