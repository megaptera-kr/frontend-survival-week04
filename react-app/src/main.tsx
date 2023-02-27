import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

function main() {
  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  const root = createRoot(element);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

main();
