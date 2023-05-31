import ButtonField from './ButtonField';
import TextField from './TextField';

type SearchBarProps = {
    filterText: string;
    setFilterText: (value : string) => void;

    buttonClicked: string;
    setButtonClicked: (value : string) => void;
}

export default function SearchBar({
  filterText, setFilterText, buttonClicked, setButtonClicked,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <TextField
        label="검색 "
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <div>
        <ButtonField
          buttonValue="전체"
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
        />
        <ButtonField
          buttonValue="한식"
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
        />
        <ButtonField
          buttonValue="일식"
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
        />
        <ButtonField
          buttonValue="중식"
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
        />
      </div>
    </div>
  );
}
