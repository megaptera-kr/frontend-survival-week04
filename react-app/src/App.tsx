import { PropsWithChildren } from 'react';

import KioskPage from './pages/KioskPage';

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

function App() {
  return (
    <Layout>
      <KioskPage />
    </Layout>
  );
}

export default App;
