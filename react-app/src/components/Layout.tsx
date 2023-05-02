import { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children: ReactNode;
}
export default function Layout({ children }:Props) {
  return (
    <main className="container my-12">
      <Header />
      <section className="w-full flex">
        {children}
      </section>
    </main>
  );
}
