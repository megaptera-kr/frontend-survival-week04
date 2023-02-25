import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';

import { restaurants } from './restaurants.json';

export default function App() {
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <h2>점심 바구니</h2>
      <FilterableRestaurantsTable restaurants={restaurants} />
    </div>
  );
}
