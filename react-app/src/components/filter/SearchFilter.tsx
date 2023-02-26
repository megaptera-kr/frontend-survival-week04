import styled from 'styled-components';

const SearchFilterContainer = styled.div``;

const SearchFilterInput = styled.input.attrs({
  type: 'text',
})`
  margin: 10px 0px 10px 0px;
  padding: 5px 10px 5px 10px;
  font-size: 20px;
`;

type SearchProps = {
  searchTerm: string;
  setSearchTerm: (arg: string) => void;
};

function SearchFilter({ searchTerm, setSearchTerm }: SearchProps) {
  return (
    <SearchFilterContainer>
      <SearchFilterInput
        type="text"
        name="검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
    </SearchFilterContainer>
  );
}

export default SearchFilter;
