import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

async function main() {
  const url = 'http://localhost:3000/restaurants';
  const res = await fetch(url);
  const data = await res.json();
  const { restaurants } = data;

  const element = document.getElementById('root');

  if (element) {
    const root = ReactDOM.createRoot(element);

    root.render((
      <React.StrictMode>
        {/* <App /> */}
        <App restaurants={restaurants} />
      </React.StrictMode>
    ));
  }
}

main();
