import ProductBanner from '../productBanner/ProductBanner';
import styles from './ProductBannerList.module.scss';

export default function ProductBannerList() {
  return (
    <div className={styles.productBannerListWrapper}>
      <div className="container">
        <ul className={styles.productBannerList}>
          <li>
            <ProductBanner title="ZX9 Speaker" variant="primary" />
          </li>
          <li>
            <ProductBanner title="ZX7 SPEAKER" variant="secondary" />
          </li>
          <li>
            <ProductBanner title="YX1 EARPHONES" variant="alternative" />
          </li>
        </ul>
      </div>
    </div>
  );
}
