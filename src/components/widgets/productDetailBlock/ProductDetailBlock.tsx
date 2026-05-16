import Title from '../../ui/title/Title';
import Button from '../../ui/button/Button';
import CartAmount from '../../ui/cartAmount/CartAmount';
import styles from './ProductDetailBlock.module.scss';
import { useImageByScreenSize } from '../../../hooks/useImageByScreenSize';
import type { Product } from '../../../types/types';

type ProductDetailBlockProps = {
  productData: Product;
};

export default function ProductDetailBlock({
  productData,
}: ProductDetailBlockProps) {
  const {
    name,
    image,
    description,
    new: isNew,
    price,
    features,
    includes,
  } = productData;

  const productImage = useImageByScreenSize(image);

  return (
    <section className={styles.productDetailBlock}>
      <div className="container">
        <div className={styles.productDetailBlockWrapper}>
          <div className={styles.top}>
            <div className={styles.imageBox}>
              <img src={productImage} alt={`An image of ${name}`} />
            </div>
            <div className={styles.description}>
              <div className={styles.productInfo}>
                <div className={styles.header}>
                  {isNew && <p className={styles.subtitle}>New product</p>}
                  <Title
                    level={1}
                    variant="md-28"
                    className={styles.productTitle}
                  >
                    {name}
                  </Title>
                </div>
                <p className={styles.productDescription}>{description}</p>
                <p className={styles.price}>
                  $ {price.toLocaleString('en-US')}
                </p>
              </div>

              <div className={styles.actions}>
                <CartAmount variant='regular' />
                <Button type="button" variant="filled">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.features}>
              <Title level={2} variant="md-24" className={styles.featuresTitle}>
                Features
              </Title>
              <p className={styles.featuresText}>{features}</p>
            </div>
            <div className={styles.set}>
              <Title level={2} variant="md-24" className={styles.setTitle}>
                In the box
              </Title>
              <ul className={styles.itemsList}>
                {includes.map((obj) => {
                  return (
                    <li className={styles.item}>
                      <span className={styles.quantity}>{obj.quantity}x</span>
                      <span className={styles.itemName}>{obj.item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
