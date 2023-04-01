import { render, screen } from '@testing-library/react';

import Food from '../components/Food';
import { restaurant } from './data/restaurants';

const context = describe;

describe('Food', () => {
  const { menu: [{ name, price }] } = restaurant;
  const onClick = jest.fn();

  it('render Food without crash', () => {
    render(<Food name={name} price={price} onClick={onClick} />);

    const button = screen.getByRole('button');

    expect(screen.getByText(`이름: ${name}`)).toBeInTheDocument();
    expect(screen.getByText(`가격: ${price.toLocaleString()}`)).toBeInTheDocument();
    expect(button).toHaveTextContent('선택');
  });

  context('when has no onClick function props', () => {
    it('should be no select button', () => {
      render(<Food name={name} price={price} />);

      const button = screen.queryByRole('button');

      expect(button).not.toBeInTheDocument();
    });
  });
});
