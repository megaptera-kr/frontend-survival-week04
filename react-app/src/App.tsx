import Layout from './components/Layout';
import FilterableRestaurant from './components/FilterableRestaurant';
import RightSide from './components/RightSide';

export default function App() {
  return (
    <Layout>
      <FilterableRestaurant />
      <RightSide />
    </Layout>
  );
}
