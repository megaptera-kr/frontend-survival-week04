import Food from '../types/Food';
import MenuItem from './MenuItem';

export default function Menu({ menu }: { menu: Food[] }) {
  return (
    <ul>
      {menu.map((food: Food, index: number) => {
        const key = `${food.id}-${index}`;
        return <MenuItem key={key} food={food} isButtonHidden={false} />;
      })}
    </ul>
  );
}
