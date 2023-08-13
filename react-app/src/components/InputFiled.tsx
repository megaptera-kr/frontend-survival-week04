type InputFiledProps = {
    filterText: string;
    setFilterText: (value:string) => void;
}

export default function InputFiled({ filterText, setFilterText }:InputFiledProps) {
  const handleTextFilterChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };
  const id = 'search-bar';
  return (
    <div>
      <label htmlFor={id}>검색</label>
      <input id={id} type="text" placeholder="식당 이름" value={filterText} onChange={handleTextFilterChange} />
    </div>
  );
}
