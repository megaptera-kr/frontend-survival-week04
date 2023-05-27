type SerchBarPropsType ={
  categories: string[],
  filterText: string,
  setFilterText: (text: string) => void
  setFilterCategories: (text: string) => void
}

export default function SerchBar({
  categories, filterText,
  setFilterText, setFilterCategories,
}: SerchBarPropsType) {
  // 구분선

  const handelSerchbar = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setFilterText(value);
  };

  return (
    <div>
      <label htmlFor="serch">검색</label>
      <input
        type="text"
        id="serch"
        value={filterText}
        onChange={handelSerchbar}
      />
      <ul>
        {['전체', ...categories].map((categorie) => (
          <button
            key={categorie}
            type="button"
            onClick={() => setFilterCategories(categorie)}
          >
            {categorie}
          </button>
        ))}
      </ul>
    </div>
  );
}
