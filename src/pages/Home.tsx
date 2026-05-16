import HeroSection from '../components/widgets/heroSection/HeroSection';
import CategoriesList from '../components/widgets/categoriesList/CategoriesList';
import ProductBannerList from '../components/widgets/productBannerList/ProductBannerList';
import AboutSection from '../components/widgets/aboutSection/AboutSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesList />
      <ProductBannerList />
      <AboutSection />
    </>
  );
}
