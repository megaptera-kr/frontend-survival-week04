import { render } from '@testing-library/react';

import App from './App';

jest.mock('@tanstack/react-query', () => ({
  useQuery: () => ({ isLoading: false, error: {}, data: [] }),
  useMutation: () => ({ isLoading: false, error: {}, data: [] }),
}));

describe('App ', () => {
  it('renders without crash', () => {
    render(<App />);
  });
});
