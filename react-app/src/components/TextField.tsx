import { ChangeEvent } from 'react';

interface TextFieldProps {
  label: string;
  placeholder: string;
  restaurantName: string;
  setRestaurantName: (value: string) => void;
}

export default function TextField({
  label,
  placeholder,
  restaurantName,
  setRestaurantName,
}: TextFieldProps) {
  const handleText = (e: ChangeEvent<HTMLInputElement>) => setRestaurantName(e.target.value);
  return (
    <>
      <label htmlFor="searchBar" style={{ paddingRight: '1rem' }}>
        {label}
      </label>
      <input
        type="text"
        value={restaurantName}
        onChange={handleText}
        id="searchBar"
        placeholder={placeholder}
      />
    </>
  );
}
