import { ReactNode } from 'react';
import { Navbar } from '../components/Nabvar';
import { Navigation } from '../components/Navigation';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <header>
        <Navbar />
        <Navigation />
      </header>
      {children}
    </>
  );
}
