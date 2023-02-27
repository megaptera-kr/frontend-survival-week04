import styled from 'styled-components';
import SearchFilter from './SearchFilter';
import SelectFilter from './SelectFilter';

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type FilterProps = {
  searchTerm:string;
  setSearchTerm:(args:string)=>void;
  searchCategory:string;
  setSearchCategory:(args:string)=>void;
}

function Filter({
  searchTerm, setSearchTerm, searchCategory, setSearchCategory,
} : FilterProps) {
  return (
    <FilterContainer>
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SelectFilter searchCategory={searchCategory} setSearchCategory={setSearchCategory} />
    </FilterContainer>
  );
}

export default Filter;
