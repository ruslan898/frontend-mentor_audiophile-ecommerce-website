import styles from './ProductCard.module.scss';
import imgMobile from '../../../assets/shared/mobile/image-zx7-speaker.jpg';
import imgTablet from '../../../assets/shared/tablet/image-zx7-speaker.jpg';
import imgDesktop from '../../../assets/shared/desktop/image-zx7-speaker.jpg';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import Title from '../../ui/title/Title';
import Button from '../../ui/button/Button';

export default function ProductCard() {
  const windowWidth = useWindowWidth();

  const image =
    windowWidth < 768 ? imgMobile : windowWidth < 1024 ? imgTablet : imgDesktop;

  return (
    <div className={styles.productCard}>
      <div className={styles.imageBox}>
        <img src={image} alt="An image of a product" />
      </div>
      <Title level={3} variant="md-24" className={styles.title}>
        ZX7 SPEAKER
      </Title>
      <Button variant="filled" className={styles.cardBtn}>
        See product
      </Button>
    </div>
  );
}
