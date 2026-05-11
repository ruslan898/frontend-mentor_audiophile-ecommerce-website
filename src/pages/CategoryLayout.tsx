import { Outlet } from 'react-router-dom';
import CategoriesSubheader from '../components/ui/categoriesSubheader/CategoriesSubheader';

export default function CategoryLayout() {
  return (
    <>
      <CategoriesSubheader>Headphones</CategoriesSubheader>
      <Outlet />
    </>
  );
}
