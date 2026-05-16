import styles from './ProductCard.module.scss';

import Title from '../../ui/title/Title';
import Button from '../../ui/button/Button';
import type { OtherProduct } from '../../../types/types';
import { useImageByScreenSize } from '../../../hooks/useImageByScreenSize';

type ProductCardProps = {
  productData: OtherProduct;
};

export default function ProductCard({ productData }: ProductCardProps) {
  const { name, slug, image } = productData ?? {};

  const productImage = useImageByScreenSize(image);

  return (
    <div className={styles.productCard}>
      <div className={styles.imageBox}>
        <img src={productImage} alt="An image of a product" />
      </div>
      <Title level={3} variant="md-24" className={styles.title}>
        {name}
      </Title>
      <Button
        href={`/product-detail/${slug}`}
        variant="filled"
        className={styles.cardBtn}
      >
        See product
      </Button>
    </div>
  );
}
