import { render } from '@testing-library/react';

import RestaurantTableHeader from './components/RestaurantTableHeader';

describe('RestaurantTableHeader ', () => {
  it('renders without crash', () => {
    render(<RestaurantTableHeader />);
  });
});
