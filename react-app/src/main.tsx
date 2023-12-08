import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
  const element = document.getElementById('root');

  if (element === null) {
    return;
  }

  const root = ReactDOM.createRoot(element);
  root.render(<App />);
}

main();
