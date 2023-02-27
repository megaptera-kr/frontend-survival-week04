import { fireEvent, render, screen } from '@testing-library/react';

import FilterButton from './FilterButton';

const category = '중식';

const setFilterCategory = jest.fn();

const context = describe;

describe('FilterButton', () => {
  function renderFilterButton() {
    render(<FilterButton category={category} setFilterCategory={setFilterCategory} />);
  }

  context('중식 버튼을 누르면', () => {
    it('setCategory 함수가 "중식" 인자와 함께 호출된다', () => {
      renderFilterButton();

      fireEvent.click(screen.getByText('중식'));

      expect(setFilterCategory).toBeCalledWith('중식');
    });
  });
});
