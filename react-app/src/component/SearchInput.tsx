type SearchInputProps = {
  handleSearchRestaurantName: (value: string) => void;
};

export default function SearchInput({
  handleSearchRestaurantName,
}: SearchInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchRestaurantName(event.target.value);
  };

  return (
    <>
      <label htmlFor='input-search'>검색</label>
      <input
        type='text'
        id='input-search'
        placeholder='식당 이름'
        onChange={handleChange}
      />
    </>
  );
}
