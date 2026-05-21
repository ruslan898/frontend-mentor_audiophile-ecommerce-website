import { useRouteLoaderData } from 'react-router-dom';
import Header from '../header/Header';
import Title from '../../ui/title/Title';
import Button from '../../ui/button/Button';
import { getImgPathsObj } from '../../../utils';
import { useImageByScreenSize } from '../../../hooks/useImageByScreenSize';
import styles from './HeroSection.module.scss';
import heroImageMobile from '/assets/home/mobile/image-header.jpg';
import heroImageTablet from '/assets/home/tablet/image-header.jpg';
import heroImageDesktop from '/assets/home/desktop/image-hero.jpg';
import type { Product } from '../../../types/types';

export default function HeroSection() {
  const data = useRouteLoaderData('root-route');

  const imageUrlObj = getImgPathsObj(
    heroImageMobile,
    heroImageTablet,
    heroImageDesktop,
  );
  const bgImage = useImageByScreenSize(imageUrlObj);

  const PRODUCT_NAME = 'XX99 Mark II Headphones';

  const productInfo = data.find(
    (obj: Product) => obj.name.toLowerCase() === PRODUCT_NAME.toLowerCase(),
  );

  const { name, new: isNew, slug } = productInfo;

  return (
    <section
      className={styles.heroSection}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className={styles.heroSectionWrapper}>
          <Header />
          <div className={styles.textBlock}>
            {isNew && <p className={styles.overline}>New product</p>}
            <Title level={1} variant="xl" className={styles.title}>
              {name}
            </Title>
            <p className={styles.description}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
          <Button type='link' href={`product-detail/${slug}`} variant="filled">
            See product
          </Button>
        </div>
      </div>
    </section>
  );
}
