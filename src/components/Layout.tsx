import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen" data-id="trufusxxf" data-path="src/components/Layout.tsx">
      <Header />
      <main className="flex-grow" data-id="l7w7z83rr" data-path="src/components/Layout.tsx">
        {children}
      </main>
      <Footer />
    </div>);

};

export default Layout;