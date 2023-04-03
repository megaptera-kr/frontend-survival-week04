import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import filterRestaurants from './utils/filterRestaurants';
import ReceiptPrinter from './components/ReceiptPrinter';
import Receipt from './types/Receipt';
import Menu from './types/Menu';

export default function App() {
  const restaurants = useFetchRestaurants();

  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);
  const [receipt, setReceipt] = useLocalStorage<Receipt | undefined>('receipt', undefined);

  const filteredRestaurants = filterRestaurants({ restaurants, filterText, filterCategory });

  const handleAddCart = (menuItem: Menu) => {
    setCart([
      ...cart,
      menuItem,
    ]);
  };

  const handleDeleteCart = (id: string) => {
    setCart(cart.filter((cartItem) => cartItem.id !== id));
  };

  const handleReceipt = async ({ menu, totalPrice }: {
        menu: Menu[],
        totalPrice: number
    }) => {
    const url = 'http://localhost:3000/orders';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const data = await response.json();
    setReceipt(data);
  };

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart
        cart={cart}
        onDeleteCart={handleDeleteCart}
        onReceipt={handleReceipt}
      />
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <FilterableRestaurantsTable
        restaurants={filteredRestaurants}
        onAddCart={handleAddCart}
      />
      <ReceiptPrinter
        receipt={receipt}
      />
    </div>
  );
}
