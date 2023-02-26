import ReactDOM from 'react-dom/client';
import App from './App';

async function main() {
  const url = 'http://localhost:3000/restaurants';
  const response = await fetch(url);
  const data = await response.json();
  const { restaurants } = data;

  const container = document.getElementById('root');

  if (!container) return;

  const root = ReactDOM.createRoot(container);
  root.render(<App restaurants={restaurants} />);
}

main();
