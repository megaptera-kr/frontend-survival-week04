import styled from 'styled-components';

const SelectContainer = styled.div`
  width: 80%;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;

const SelectInput = styled.input.attrs({
  type: 'radio',
  name: 'category',
})`
  width: 25px;
  height: 25px;
  margin: 0px 5px 0px 5px;
  cursor: pointer;
`;

const SelectLabel = styled.label`
  font-size: 20px;
  cursor: pointer;
`;

type SelectProps = {
  searchCategory: string;
  setSearchCategory: (args: string) => void;
};

function SelectFilter({ searchCategory, setSearchCategory }: SelectProps) {
  return (
    <SelectContainer>
      <SelectBox>
        <SelectInput
          id="전체"
          checked={searchCategory === ''}
          onChange={() => setSearchCategory('')}
        />
        <SelectLabel htmlFor="전체">전체</SelectLabel>
      </SelectBox>
      <SelectBox>
        <SelectInput
          id="중식"
          checked={searchCategory === '중식'}
          onChange={(e) => setSearchCategory(e.target.id)}
        />
        <SelectLabel htmlFor="중식">중식</SelectLabel>
      </SelectBox>
      <SelectBox>
        <SelectInput
          id="한식"
          checked={searchCategory === '한식'}
          onChange={(e) => setSearchCategory(e.target.id)}
        />
        <SelectLabel htmlFor="한식">한식</SelectLabel>
      </SelectBox>
      <SelectBox>
        <SelectInput
          id="일식"
          checked={searchCategory === '일식'}
          onChange={(e) => setSearchCategory(e.target.id)}
        />
        <SelectLabel htmlFor="일식">일식</SelectLabel>
      </SelectBox>
    </SelectContainer>
  );
}

export default SelectFilter;
