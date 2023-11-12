import FilterableMenuContainer from './components/FilterableMenuConainer';

import useInit from './hooks/useInit';

export default function App() {
  const { loading, restaurntsData } = useInit();

  if (loading) return <div>로딩중</div>;

  return <FilterableMenuContainer restaurants={restaurntsData} />;
}
