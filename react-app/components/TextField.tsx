type Props = {
  query : string,
  setQuery : React.Dispatch<React.SetStateAction<string>>;
}

function TextField({ query, setQuery } : Props) {
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <div>
      <label style={{ marginRight: '18px' }} htmlFor="restaurants">검색</label>
      <input id="restaurants" value={query} onChange={handleChange} placeholder="식당 이름" />
    </div>
  );
}

export default TextField;
