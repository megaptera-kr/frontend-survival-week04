type RestaurantTableHeadProps = {
    labels: string[]
}

export default function RestaurantTableHead(
  { labels }:RestaurantTableHeadProps,
) {
  return (
    <thead>
      <tr>
        {labels.map((label) => (
          <th key={label} style={{ paddingInline: '2rem' }}>{label}</th>))}
      </tr>
    </thead>
  );
}
