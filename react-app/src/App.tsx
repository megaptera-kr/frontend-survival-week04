import styled from 'styled-components';
import Title from './components/Title';
import Filter from './components/filter/Filter';
import Store from './components/store/Store';
import useGetStore from './hooks/useGetStore';
import GlobalStyle from './GlobalStyles';
import useFilter from './hooks/useFilter';
import useOrder from './hooks/useOrder';
import Order from './components/order/Order';
import { filterRestaurants } from './utils/filterUtil';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  const restaurants = useGetStore();
  const { order, setOrder } = useOrder();
  const {
    searchTerm, setSearchTerm, searchCategory, setSearchCategory,
  } = useFilter();

  const result = filterRestaurants(restaurants, searchCategory, searchTerm);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title title="푸드코트 키오스크" />
        <Filter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
        />
        {result.map((r) => (
          <Store
            key={r.name}
            restaurant={r}
            setOrder={setOrder}
            order={order}
          />
        ))}
        <Order order={order} />
      </Container>
    </>
  );
}
