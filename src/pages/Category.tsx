import ProductPreviewList from '../components/widgets/productPreviewList/ProductPreviewList';
import CategoriesList from '../components/widgets/categoriesList/CategoriesList';
import AboutSection from '../components/widgets/aboutSection/AboutSection';

export default function Category() {
  return (
    <main className="mainContent pad-y-120">
      <ProductPreviewList />
      <CategoriesList />
      <AboutSection />
    </main>
  );
}
