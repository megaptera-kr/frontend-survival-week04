import Categories from './Categories';
import TextField from './TextField';

type SearchBarProps = {
  filterText : string,
  setFilterText : (value:string) => void,
  category : string[],
  setFilterCategory :(value:string) =>void
}

export default function SearchBar(
  {
    filterText, setFilterText, category, setFilterCategory,
  }:SearchBarProps,
) {
  return (
    <>
      <TextField filterText={filterText} setFilterText={setFilterText} />
      <div>
        {
          ['전체', ...category].map((categories) => (
            <Categories
              key={categories}
              categories={categories}
              setFilterCategory={setFilterCategory}
            />
          ))
        }
      </div>
    </>
  );
}
