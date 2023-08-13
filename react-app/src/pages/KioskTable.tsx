import { RestaurantsData } from './hooks/useFetchRestaurants';
import { MenuType } from './KioskPage';

type Props = {
  restaurantsData: RestaurantsData['restaurants']
  onAddSelectedMenus: (menu: MenuType) => void
}

function KioskTable(
  { restaurantsData, onAddSelectedMenus }: Props,
) {
  const handleClickMenu = (item: MenuType) => {
    onAddSelectedMenus(item);
  };

  return (
    <table>
      <thead>
        <tr>
          <td>식당이름</td>
          <td>종류</td>
          <td>메뉴</td>
        </tr>
      </thead>
      <tbody>
        {restaurantsData.map(({
          id, name, category, menu,
        }) => (
          <tr key={`restaurants_${id}`}>
            <td>{name}</td>

            <td>{category}</td>

            <td>
              {menu.map((item) => (
                <div key={`${item.name}_menu_${item.id}`}>
                  <label>
                    <span>{`${item.name} (${item.price.toLocaleString()})원`}</span>
                    {' '}
                    <button type="button" name={`#${item.name}`} onClick={() => handleClickMenu(item)}>메뉴 추가</button>
                  </label>
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default (KioskTable);
