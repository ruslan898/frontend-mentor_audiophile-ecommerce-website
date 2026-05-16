import { useParams, useRouteLoaderData, useNavigate } from 'react-router-dom';
import AboutSection from '../components/widgets/aboutSection/AboutSection';
import CategoriesList from '../components/widgets/categoriesList/CategoriesList';
import OtherProductsList from '../components/widgets/otherProductsList/OtherProductsList';
import ProductDetailBlock from '../components/widgets/productDetailBlock/ProductDetailBlock';
import ProductGallery from '../components/widgets/productGallery/ProductGallery';
import type { Product } from '../types/types';

export default function ProductDetail() {
  const { name } = useParams();
  const data = useRouteLoaderData('root-route');

  const navigate = useNavigate();

  const productData = name
    ? data.find((obj: Product) => obj.slug === name)
    : {};

  return (
    <>
      <div className="page-layout">
        <div className="container">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="backBtn"
          >
            Go Back
          </button>
        </div>
        <ProductDetailBlock productData={productData} />
      </div>
      <ProductGallery imagesObj={productData.gallery} />
      <OtherProductsList dataArr={productData.others} />
      <CategoriesList />
      <AboutSection />
    </>
  );
}
