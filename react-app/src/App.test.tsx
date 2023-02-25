import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  function renderApp() {
    render(<App />);
  }

  it('renders without crash', async () => {
    renderApp();

    await waitFor(() => {
      screen.getByText('푸드코트 키오스크');
    });
  });
});
