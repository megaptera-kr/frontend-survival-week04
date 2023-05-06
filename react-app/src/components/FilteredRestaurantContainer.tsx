import FilterTable from './FilterTable';
import RestaurantTable from './RestaurantTable';

export default function FilteredRestaurantContainer() {
  return (
    <div style={{ width: '50%', float: 'left' }}>
      <h2>식당 목록</h2>
      <FilterTable />
      <RestaurantTable />
    </div>
  );
}
