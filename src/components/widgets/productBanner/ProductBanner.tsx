import { useRouteLoaderData } from 'react-router-dom';
import clsx from 'clsx';
import styles from './ProductBanner.module.scss';
import Title from '../../ui/title/Title';
import Button from '../../ui/button/Button';
import { getImgPathsObj } from '../../../utils/utils';
import { useImageByScreenSize } from '../../../hooks/useImageByScreenSize';
import imagePrimaryMobile from '/assets/home/mobile/image-speaker-zx9.png';
import imagePrimaryTablet from '/assets/home/tablet/image-speaker-zx9.png';
import imagePrimaryDesktop from '/assets/home/desktop/image-speaker-zx9.png';
import type { Product } from '../../../types/types';

type ProductBannerProps = {
  title: string;
  variant: 'primary' | 'secondary' | 'alternative';
};

export default function ProductBanner({
  title = 'ZX9 Speaker',
  variant = 'primary',
}: ProductBannerProps) {
  const classes = clsx(
    styles[`productBanner${variant[0].toUpperCase() + variant.slice(1)}`],
  );

  const data = useRouteLoaderData('root-route');

  const bannerInfo = data.find((obj: Product) => {
    const slug = obj.slug.split('-').join(' ');
    return slug.toLowerCase() === title.toLowerCase();
  });

  const { slug } = bannerInfo ?? {};

  const imgPrimaryObj = getImgPathsObj(
    imagePrimaryMobile,
    imagePrimaryTablet,
    imagePrimaryDesktop,
  );

  const imagePrimary = useImageByScreenSize(imgPrimaryObj);

  if (variant === 'primary') {
    return (
      <div className={classes}>
        <div className={styles.imageBox}>
          <img src={imagePrimary} alt="ZX9 Speaker" />
        </div>
        <div className={styles.description}>
          <Title level={2} variant="xl" className={styles.bannerTitle}>
            {title}
          </Title>
          <p className={styles.bannerText}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            type='link'
            href={`product-detail/${slug}`}
            variant="filled"
            className={styles.bannerBtn}
          >
            See product
          </Button>
        </div>
      </div>
    );
  }

  if (variant === 'secondary') {
    return (
      <div className={classes}>
        <Title level={3} variant="md-28">
          {title}
        </Title>
        <Button type='link' href={`product-detail/${slug}`} variant="outline">
          See product
        </Button>
      </div>
    );
  }

  if (variant === 'alternative') {
    return (
      <div className={classes}>
        <div className={styles.imageBox}></div>
        <div className={styles.description}>
          <Title level={3} variant="md-28">
            {title}
          </Title>
          <Button type='link' href={`product-detail/${slug}`} variant="outline">
            See product
          </Button>
        </div>
      </div>
    );
  }
}
