import { Restaurant } from '../types';

type RestaurantsProps = Restaurant[];

export default function Restaurants({
  restaurants,
}: {
  restaurants: RestaurantsProps;
}) {
  return (
    <>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.category}</td>
          <td>
            <ul>
              {restaurant.menu.map((menu) => (
                <li key={menu.id}>
                  <p>
                    {menu.name}
                    {`(${menu.price.toLocaleString()}원)`}
                  </p>
                </li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </>
  );
}
