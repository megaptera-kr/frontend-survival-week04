import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
  // TODO: App 컴포넌트를 render 해주세요.
  const Root = document.getElementById('root') as HTMLElement;
  ReactDOM.createRoot(Root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

main();
