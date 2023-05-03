import { createRoot } from 'react-dom/client';
import App from './App';

function main() {
  // TODO: App 컴포넌트를 render 해주세요.

  const domNode = document.getElementById('root');

  if (!domNode) {
    return;
  }

  const root = createRoot(domNode);

  root.render(<App />);
}

main();
