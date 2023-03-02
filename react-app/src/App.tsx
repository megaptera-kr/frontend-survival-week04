import "./app.css";
import { useFetch } from "usehooks-ts";
import SearchBar from "./components/SearchBar";
import useRestaurants from "./hooks/useRestaurants";
import FilterCategory from "./components/FilterCategory";
import { RestaurantType } from "./types/restaurants";
import Restaurants from "./components/Restaurants";
import useShoppingBasket from "./hooks/useShoppingBasket";
import MenuCart from "./components/MenuCart";
import useReceipt from "./hooks/useReceipt";
import Receipt from "./components/Receipt";

export default function App() {
  const { data: restaurant } = useFetch<{ restaurants: RestaurantType[] }>(
    "http://localhost:3000/restaurants"
  );
  const {
    restaurantList,
    search,
    setSearch,
    setFilter,
    categories,
  } = useRestaurants(restaurant?.restaurants || []);
  const {
    totalPrice,
    addShoppingList,
    menuList,
    removeMenu,
    reset: resetBascket,
  } = useShoppingBasket();
  const { receipt, setReceipt } = useReceipt();

  const handleOrder = async () => {
    try {
      fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ menu: menuList, totalPrice }),
      })
        .then((response) => response.json())
        .then((data) => {
          setReceipt(data);
          resetBascket();
        });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="app_container">
      <h1>푸드코트 키오스크</h1>
      <MenuCart
        menu={menuList}
        totalPrice={totalPrice}
        handleOrder={handleOrder}
        handleRemove={removeMenu}
      />
      <SearchBar onChange={setSearch} value={search} />
      <FilterCategory filterList={categories} onFilterClick={setFilter} />
      <Restaurants
        restaurantList={restaurantList}
        handleAddClick={addShoppingList}
      />
      <Receipt receipt={receipt} />
    </div>
  );
}
