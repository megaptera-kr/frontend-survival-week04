import ReactDOM from 'react-dom/client';

import App from './App';

function main() {
  // TODO: App 컴포넌트를 render 해주세요.
  const container = document.querySelector('#root');

  if (!container) {
    return;
  }
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}

main();
