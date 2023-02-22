import { ChangeEvent } from 'react';

type SearchBarProps = {
  restaurantName: string;
  handleChangeRestaurantName: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({
  restaurantName,
  handleChangeRestaurantName,
}: SearchBarProps) {
  return (
    <div>
      <label htmlFor="restaurantName">검색</label>
      <input
        id="restaurantName"
        type="text"
        placeholder="식당 이름"
        value={restaurantName}
        onChange={handleChangeRestaurantName}
      />
    </div>
  );
}
