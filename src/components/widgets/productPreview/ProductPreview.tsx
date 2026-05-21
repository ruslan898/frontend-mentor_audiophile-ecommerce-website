import Title from '../../ui/title/Title';
import Button from '../../ui/button/Button';
import styles from './ProductPreview.module.scss';
import { useImageByScreenSize } from '../../../hooks/useImageByScreenSize';
import type { Product } from '../../../types/types';

type ProductPreviewProps = {
  productData: Product;
  reversed?: boolean;
};

export default function ProductPreview({
  productData,
  reversed = false,
}: ProductPreviewProps) {
  const { name, description, new: isNew, categoryImage, slug } = productData;

  const image = useImageByScreenSize(categoryImage);

  return (
    <section className={styles.productPreview}>
      <div className="container">
        <div
          className={`${styles.productPreviewWrapper} ${reversed ? styles.reversed : ''}`}
        >
          <div className={styles.imageBox}>
            <img src={image} alt="Headphones" />
          </div>
          <div className={styles.description}>
            {isNew && <p className={styles.overline}>New product</p>}
            <Title level={2} variant="lg">
              {name}
            </Title>
            <p className={styles.text}>{description}</p>
            <Button
              type="link"
              href={`/product-detail/${slug}`}
              variant="filled"
            >
              See product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
