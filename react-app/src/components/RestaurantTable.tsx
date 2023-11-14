import { useLocalStorage } from "usehooks-ts";
import { RestaurantsType, Restaurants, Menu, Orders } from "../../../common";
import useStorage, { storageKey, useCartStorage } from "../hooks/useStorage";

interface Props {
  data: RestaurantsType;
}

function RestaurantRow({ restaurant }: { restaurant: Restaurants }) {
  const { id, name, category, menu } = restaurant;

  const { setCart } = useCartStorage();

  const handleCartInBtn = (menu: Menu) => {
    setCart(prev => [...prev, menu]);
  };

  return (
    <tr key={`${id}`}>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <ul>
          {menu.map(menuItem => (
            <li key={menuItem.id}>
              {`${menuItem.name}(${menuItem.price}원)`}
              <button onClick={() => handleCartInBtn(menuItem)}>선택</button>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

function RestaurantTable({ data }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <RestaurantRow key={`${row.id}_${row.name}`} restaurant={row} />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
