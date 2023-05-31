import ReactDOM from 'react-dom/client';

import React from 'react';
import App from './App';

async function main() {
  // TODO: App 컴포넌트를 render 해주세요.

  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

main();
