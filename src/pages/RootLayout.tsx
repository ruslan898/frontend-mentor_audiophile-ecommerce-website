import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import Header from '../components/widgets/header/Header';
import Footer from '../components/widgets/footer/Footer';

export default function RootLayout() {
  const path = useLocation().pathname;

  if (path === '/') {
    return (
      <>
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </>
    );
  }

  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
