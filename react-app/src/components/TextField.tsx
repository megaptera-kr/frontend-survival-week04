export default function TextField() {
  return (
    <>
      <label htmlFor="searchBar" style={{ paddingRight: 15 }}>검색</label>
      <input type="text" placeholder="식당 이름" id="searchBar" />
    </>
  );
}
