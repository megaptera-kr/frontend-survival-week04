import FilterableMenuContainer from './components/FilterableMenuConainer';

import useInit from './hooks/useInit';

export default function App() {
  const { restaurntsData } = useInit();

  return <FilterableMenuContainer restaurants={restaurntsData} />;
}
