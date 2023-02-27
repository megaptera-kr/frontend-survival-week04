import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

let filterText: string;

const setFilterText = jest.fn();

const context = describe;

describe('SearchBar', () => {
  function renderSearchBar() {
    render(<SearchBar
      filterText={filterText}
      setFilterText={setFilterText}
    />);
  }

  context('사용자가 페이지에 접속하면', () => {
    it('Search Bar가 렌더된다', () => {
      renderSearchBar();

      screen.getByLabelText('검색');
      screen.getByPlaceholderText('식당 이름');
    });
  });
});
