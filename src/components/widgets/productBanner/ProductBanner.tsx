import clsx from 'clsx';
import styles from './ProductBanner.module.scss';
import Title from '../../ui/title/Title';
import Button from '../../ui/button/Button';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import imagePrimaryMobile from '/assets/home/mobile/image-speaker-zx9.png';
import imagePrimaryTablet from '/assets/home/tablet/image-speaker-zx9.png';
import imagePrimaryDesktop from '/assets/home/desktop/image-speaker-zx9.png';

type ProductBannerProps = {
  variant: 'primary' | 'secondary' | 'alternative';
};

export default function ProductBanner({
  variant = 'primary',
}: ProductBannerProps) {
  const classes = clsx(
    styles[`productBanner${variant[0].toUpperCase() + variant.slice(1)}`],
  );

  const windowWidth = useWindowWidth();

  const imagePrimary =
    windowWidth < 768
      ? imagePrimaryMobile
      : windowWidth < 1024
        ? imagePrimaryTablet
        : imagePrimaryDesktop;

  if (variant === 'primary') {
    return (
      <div className={classes}>
        <div className={styles.imageBox}>
          <img src={imagePrimary} alt="ZX9 Speaker" />
        </div>
        <div className={styles.description}>
          <Title level={2} variant="xl" className={styles.bannerTitle}>
            ZX9 Speaker
          </Title>
          <p className={styles.bannerText}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button variant="filled" className={styles.bannerBtn}>
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
          ZX7 SPEAKER
        </Title>
        <Button variant="outline">See product</Button>
      </div>
    );
  }

  if (variant === 'alternative') {
    return (
      <div className={classes}>
        <div className={styles.imageBox}></div>
        <div className={styles.description}>
          <Title level={3} variant="md-28">
            YX1 EARPHONES
          </Title>
          <Button variant="outline">See product</Button>
        </div>
      </div>
    );
  }
}
