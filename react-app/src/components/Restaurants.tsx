import { useLocalStorage } from 'usehooks-ts';
import { Menu, Restaurant } from '../types';

type RestaurantsProps = Restaurant[];

export default function Restaurants({
  restaurants,
}: {
  restaurants: RestaurantsProps;
}) {
  const [selectedMenus, selectMenu] = useLocalStorage<Menu[]>('cart', []);

  const handleSelectMenu = (menu: Menu) => {
    selectMenu([...selectedMenus, menu]);
  };

  return (
    <>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.category}</td>
          <td>
            <ul>
              {restaurant.menu.map((menu, idx) => {
                const key = `${menu.id}-${idx}`;

                return (
                  <li key={key}>
                    <p>
                      {menu.name}
                      {`(${menu.price.toLocaleString()}원)`}
                    </p>
                    <button
                      name={`#${menu.name}`}
                      type="button"
                      onClick={() => handleSelectMenu(menu)}
                    >
                      선택
                    </button>
                  </li>
                );
              })}
            </ul>
          </td>
        </tr>
      ))}
    </>
  );
}
