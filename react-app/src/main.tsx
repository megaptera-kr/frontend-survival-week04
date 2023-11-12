import { createRoot } from 'react-dom/client';
import App from './App';
import './index.module.css';

function main() {
  const element = document.getElementById('root');
  if (element) {
    const root = createRoot(element);
    root.render(<App />);
  }
}

main();
