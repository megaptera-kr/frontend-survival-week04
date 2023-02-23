import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';
import App from './App';

describe('App ', () => {
  it('renders without crash', () => {
    render(<App />);
  });
});
