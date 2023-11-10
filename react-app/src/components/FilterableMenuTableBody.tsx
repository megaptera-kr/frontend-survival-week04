import FilterableMenuTableRow from './FilterableMenuTableRow';

import { MenuItem, RestaurantItem } from '../types/restaurantItemType';

type FilterableMenuTableProps = {
  restaurants: RestaurantItem[];
  handleAdd: (item: MenuItem) => void;
};

export default function FilterableMenuTableBody({
  restaurants,
  handleAdd,
}: FilterableMenuTableProps) {
  return (
    <tbody>
      {restaurants.map((restaurant) => (
        <FilterableMenuTableRow
          key={restaurant.id}
          restauant={restaurant}
          onClick={handleAdd}
        />
      ))}
    </tbody>
  );
}
