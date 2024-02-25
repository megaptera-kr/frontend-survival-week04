import ReactDOM from 'react-dom/client';

import App from './App';

function main() {
  const container = document.getElementById('root');

  if (!container) {
    throw new Error('Root element not found');
  }

  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}

main();
