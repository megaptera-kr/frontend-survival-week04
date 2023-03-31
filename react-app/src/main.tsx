import ReactDOM from 'react-dom/client';

import App from './App';

function main() {
  const container = document.querySelector('#root');

  if (!container) return;

  const root = ReactDOM.createRoot(container);

  root.render(<App />);
}

main();
