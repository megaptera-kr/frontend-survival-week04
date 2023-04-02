import { Restaurant } from '../../types';
import CategorySelect from './CategorySelect';
import SearchBar from './SearchBar';
import Table from './Table';

type Props = {
  restaurants: Restaurant[];
}

function RestaurantList({ restaurants = [] }: Props) {
  return (
    <div>
      <SearchBar />
      <CategorySelect />
      <Table restaurants={restaurants} />
    </div>
  );
}

export default RestaurantList;
