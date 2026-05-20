import { Outlet, useLocation } from 'react-router-dom';
import CategoriesSubheader from '../components/ui/categoriesSubheader/CategoriesSubheader';

export default function CategoryLayout() {
  const path = useLocation().pathname;
  const categoryName = path.split('/').pop();

  return (
    <>
      <CategoriesSubheader>{categoryName}</CategoriesSubheader>
      <Outlet />
    </>
  );
}
