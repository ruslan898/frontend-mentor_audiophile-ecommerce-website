import { Outlet } from 'react-router-dom';
import Header from '../components/widgets/header/Header';
import Footer from '../components/widgets/footer/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
