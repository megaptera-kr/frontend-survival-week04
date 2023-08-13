import { PropsWithChildren } from 'react';

import KioskPage from './pages/KioskPage';

function App() {
  return (
    <Layout>
      <KioskPage />
    </Layout>
  );
}

function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <main style={{
      width: '100%',
      height: 'auto',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      {children}
    </main>
  );
}

export default App;
