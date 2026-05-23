import type { OtherProduct } from '../../../types/types';
import Title from '../../ui/title/Title';
import ProductCard from '../productCard/ProductCard';
import styles from './OtherProductsList.module.scss';

type OtherProductsListProps = {
  dataArr: OtherProduct[];
};

export default function OtherProductsList({ dataArr }: OtherProductsListProps) {
  return (
    <section className={styles.otherProducts}>
      <div className="container">
        <div className={styles.otherProductsWrapper}>
          <Title level={3} variant="md-24" className={styles.title}>
            You may also like
          </Title>
          <ul className={styles.otherProductsList}>
            {dataArr.map((obj: OtherProduct) => (
              <li key={obj.name}>
                <ProductCard productData={obj} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
