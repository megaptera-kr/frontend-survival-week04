import { useEffect, useState } from 'react';
import { Menu } from '../type/menu';

export default function restaurantsInfo() {
  const [restaurants, setRestaurants] = useState<Menu[]>([]);
  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      const { menus } = data;
      setRestaurants(menus);
    }

    getRestaurants();
  }, []);
  return { restaurants };
}
