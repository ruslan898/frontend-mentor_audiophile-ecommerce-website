import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import Header from '../components/widgets/header/Header';
import Footer from '../components/widgets/footer/Footer';
import MainContent from '../components/ui/mainContent/MainContent';

export default function RootLayout() {
  const path = useLocation().pathname;

  if (path === '/') {
    return (
      <>
        <ScrollRestoration />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ScrollRestoration />
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
}
