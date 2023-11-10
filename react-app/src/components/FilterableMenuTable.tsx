import FilterableMenuTableHead from './FIlterableMenuTableHead';
import FilterableMenuTableBody from './FilterableMenuTableBody';

import { MenuItem, RestaurantItem } from '../types/restaurantItemType';

type FilterableMenuTableProps = {
  restaurants: RestaurantItem[];
  handleAdd: (item: MenuItem) => void;
};

export default function FilterableMenuTable({
  restaurants,
  handleAdd,
}: FilterableMenuTableProps) {
  return (
    <div>
      <table>
        <FilterableMenuTableHead />
        <FilterableMenuTableBody
          restaurants={restaurants}
          handleAdd={handleAdd}
        />
      </table>
    </div>
  );
}
