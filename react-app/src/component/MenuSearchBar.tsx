function MenuSearchBar() {
  return (
    <div className='searchbar'>
      <label htmlFor='input-search'>검색</label>
      <input type='text' id='input-search' placeholder='식당 이름' />

      <div className='category'>
        <ul className='category-ul'>
          <li className='category-li'>
            <button type='button'>전체</button>
          </li>
          <li className='category-li'>
            <button type='button'>중식</button>
          </li>
          <li className='category-li'>
            <button type='button'>한식</button>
          </li>
          <li className='category-li'>
            <button type='button'>일식</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuSearchBar;
