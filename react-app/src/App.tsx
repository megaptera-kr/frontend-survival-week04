import { useQuery } from '@tanstack/react-query';

import RestaurantList from './components/RestaurantList/RestaurantList';
import { useRestaurants } from './hooks/useRestaurants';

export default function App() {
  const { restaurants, isLoading } = useRestaurants();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <main>
      <h1>푸드코트 키오스크</h1>
      {/* 점심 바구니 컴포넌트 */}
      <RestaurantList restaurants={restaurants} />
      {/* 영수증 컴포넌트 */}
    </main>
  );
}
