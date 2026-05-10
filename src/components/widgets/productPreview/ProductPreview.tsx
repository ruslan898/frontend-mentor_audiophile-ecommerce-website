import Title from '../../ui/title/Title';
import Button from '../../ui/button/Button';
import styles from './ProductPreview.module.scss';
import sectionImage from '../../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg';

type ProductPreviewProps = {
  reversed?: boolean
}

export default function ProductPreview({ reversed = false }: ProductPreviewProps) {
  return (
    <section className={styles.productPreview}>
      <div className="container">
        <div
          className={`${styles.productPreviewWrapper} ${reversed ? styles.reversed : ''}`}
        >
          <div className={styles.imageBox}>
            <img src={sectionImage} alt="Headphones" />
          </div>
          <div className={styles.description}>
            <p className={styles.overline}>New product</p>
            <Title level={2} variant="lg">
              XX99 Mark II Headphones
            </Title>
            <p className={styles.text}>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <Button variant="filled">See product</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
