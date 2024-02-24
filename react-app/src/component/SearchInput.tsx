import { v4 as uuidv4 } from 'uuid';

type SearchInputProps = {
  placeholder: string;
  handleSearchRestaurantName: (value: string) => void;
};

export default function SearchInput({
  placeholder,
  handleSearchRestaurantName,
}: SearchInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchRestaurantName(event.target.value);
  };

  return (
    <>
      <label htmlFor='input-search' style={{ paddingRight: '1rem' }}>
        검색
      </label>
      <input
        type='text'
        id={`input-${uuidv4()}}`}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
}
