import { render } from '@testing-library/react';
import App from './App';
import 'whatwg-fetch';

describe('App ', () => {
  it('renders without crash', () => {
    render(<App />);
  });
});
