import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
  const element = document.getElementById('root');

  if (!element) return;

  const rootElement = ReactDOM.createRoot(element);

  rootElement.render(<App />);
}

main();
