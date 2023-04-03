import { createRoot } from 'react-dom';

import App from './App';

function main() {
  // TODO: App 컴포넌트를 render 해주세요.
  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  createRoot(element).render(<App />);
}

main();
